import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import {
  LoginForm,
  LoginPage,
  LoginContainer,
  WebsiteLogoContainer,
  WebsiteName,
  WebsiteLogo,
  LoginText,
  InputContainer,
  Label,
  Input,
  ErrorMessage,
  LoginButton,
  LoginImageContainer,
  LoginImage,
  LoginImageMobile,
  LoadingContainer
} from './styles.js'
import { loginurl } from '../urls.js'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()


  const renderSuccessView = jwtToken => {
    Cookies.set("jwt_token", jwtToken, { expires: 10 })
    navigate("/")
  }


  const renderFailureView = error => {
    setError(error)
  }

  const submitHanddler = async e => {
    e.preventDefault()
    const userDetails = { username, password }
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails)
    }
    setIsLoading(true)
    const response = await fetch(loginurl, options)
    setIsLoading(false)
    const data = await response.json()
    if (data.jwt_token) {
      renderSuccessView(data.jwt_token)
    } else {
      renderFailureView(data.error_msg)
      setShowErrorMessage(true)
    }
  }

  const token = Cookies.get("jwt_token")

  if (token !== undefined) {
    return <Navigate to="/" />
  }

  return (
    <LoginPage>
      <LoginImageMobile
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1703221493/Rectangle_1457_fryfsk.png"
        alt="website login" />
      <LoginContainer>
        <LoginForm onSubmit={submitHanddler}>
          <WebsiteLogoContainer>
            <WebsiteLogo src="https://res.cloudinary.com/dky69roxl/image/upload/v1692778547/Frame_274_ptjrpu.svg"
              alt="website logo" />
            <WebsiteName>Tasty Kitchens</WebsiteName>
            <LoginText>Login</LoginText>
          </WebsiteLogoContainer>
          <InputContainer>
            <Label htmlFor='username'>USERNAME</Label><br />
            <Input type="text"
              id="username"
              onChange={e => setUsername(e.target.value)}
              value={username} />
          </InputContainer>
          <InputContainer>
            <Label htmlFor='password'>PASSWORD</Label><br />
            <Input type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </InputContainer>
          {showErrorMessage && <ErrorMessage>*{error}</ErrorMessage>}
          {
            isLoading ?
              <LoadingContainer>
                <ThreeDots color="#fff" height={50} width={50} />
              </LoadingContainer>
              :
              <LoginButton type="submit">Login</LoginButton>
          }
        </LoginForm>
      </LoginContainer>
      <LoginImageContainer>
        <LoginImage
          src="https://res.cloudinary.com/dky69roxl/image/upload/v1692778340/Rectangle_1456_1_bfg4jn.png"
          alt="website login" />
      </LoginImageContainer>
    </LoginPage>
  )
}

export default Login
