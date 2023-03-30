import * as Yup from 'yup'
import Category from '../models/Category'
import Product from '../models/Product'
import User from '../models/User'
import Order from '../schemas/order'
class OrderController {
  async store(request, response) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          })
        ),
    })
    const productsId = request.body.products.map((product) => product.id)

    const updatedProducts = await Product.findAll({
      where: {
        id: productsId,
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
    })

    const editedProduct = updatedProducts.map((product) => {
      const productIndex = request.body.products.findIndex(
        (requestProduct) => requestProduct.id === product.id
      )

      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        url: product.url,
        quantity: request.body.products[productIndex].quantity,
      }

      return newProduct
    })
    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      console.log(err)
      return response.status(400).json({ error: err.errors })
    }

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
      products: editedProduct,
      status: 'Pedido Realizado',
    }

    const orderResponse = await Order.create(order)

    return response.status(201).json(orderResponse)
  }

  async index(request, response) {
    const orders = await Order.find()
    return response.json(orders)
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      status: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      console.log(err)
      return response.status(400).json({ error: err.errors })
    }

    const { admin: isAdmin } = await User.findByPk(request.userId)
    if (!isAdmin) {
      return response.status(401).json()
    }

    const { id } = request.params
    const { status } = request.body
    try {
      await Order.updateOne({ _id: id }, { status })
    } catch (err) {
      return response.status(400).json({ err: err.message })
    }

    return response.json({ message: 'Status was updated' })
  }
}

export default new OrderController()
