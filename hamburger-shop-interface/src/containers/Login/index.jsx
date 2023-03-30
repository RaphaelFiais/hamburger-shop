import ImageLogin from '../../assets/login.svg'
import logoImg from '../../assets/logo.svg'
import Button from '../../components/button'
import {
  Container,
  LoginImage,
  Containerlogin,
  SignUplink,
  H1
} from './style'

const Login = () => {
  return (
    <Container>
      <LoginImage src={ImageLogin} />
      <Containerlogin>
        <img src={logoImg} alt="" />
        <H1>Login</H1>
        <label>
          Email
          <input type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Password" />
        </label>
        <Button>Sign In</Button>
        <SignUplink>
          Não possui conta? <a>Sign Up</a>
        </SignUplink>
      </Containerlogin>
    </Container>
  )
}

export default Login
