import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('${BackgroundImage}');
`

export const LoginImage = styled.img`
  height: 70%;
`

export const Containerlogin = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  padding: 75px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    gap: 5px;
  }
  input {
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border: none;
    border-radius: 5px;
    width: 390px;
    height: 40px;
    padding-left: 10px;
  }
  input:first-child {
    margin-bottom: 30px;
  }
  height: 70%;
`
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 17px;
  margin-top: 20px;
`

export const SignUplink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
`
