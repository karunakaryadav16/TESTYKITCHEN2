import styled from 'styled-components'


export const LoginPage = styled.div`
 display: flex;
 justify-content: space-between;
 @media screen and (max-width: 768px){
  flex-direction: column;
}
`
export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 768px){
    margin: 0;
    width: 89%;
    padding: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
`
export const LoginForm = styled.form`
  background-color: #FDFEFF;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 20px;
  width: 350px;
  border-radius: 5px;
  @media screen and (max-width: 768px){
  background-color: transparent;
  box-shadow: none;
  width: 100%;
  padding: 0;
}
`
export const WebsiteLogoContainer = styled.div`
  text-align: center;
`
export const WebsiteLogo = styled.img`
  height: 50px;
  width: 60px;
  @media screen  and (max-width: 768px){
    display: none;
  }
`
export const WebsiteName = styled.span`
  display: block;
  color: #F7931E;
  font-family: DM Sans;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  @media screen  and (max-width: 768px){
    display: none;
  }
`

export const LoginText = styled.h2`
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  @media screen  and (max-width: 768px){
    text-align: left;
  }
`
export const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 99%
`
export const Label = styled.label`
  color: #475569;
  font-weight: 600;
  font-size: 12px;
  font-family: "DM Sans";
`
export const Input = styled.input`
  width: 98%;
  background-color: #E2E8F0;
  border: 0;
  height: 25px;
  padding: 5px;
  border-radius: 3px;
  outline: none;
`
export const ErrorMessage = styled.p`
  color: #EF4444;
  font-size: 13px;
  font-family: Bree Serif;
`

export const LoginButton = styled.button`
  width: 100%;
  color: #fff;
  border: 0;
  outline: none;
  background-color: #F7931E;
  height: 32px;
  border-radius: 3px;
  cursor: pointer;
`
export const LoginImageContainer = styled.div`
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const LoginImage = styled.img`
    height: auto;
    width: 100%;
    max-width: 100%;
`

export const LoginImageMobile = styled.img`
  @media screen and (min-width: 768px){
    display: none;
  }
  height: 20%;
  width: 95%;
  padding-left: 30px;
`

export const LoadingContainer = styled.div`
  width: 99%;
  color: #fff;
  border: 0;
  outline: none;
  background-color: #F7931E;
  height: 32px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center
`