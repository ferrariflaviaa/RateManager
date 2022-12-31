import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  h1 {
    font-size: 48px;
    margin-bottom: 8px;
  }
  span {
    margin-bottom: 28px;
  }

  .buttonLink{
    color: #b4b8bb;
    text-decoration: none;
    margin: 14px 0;
    font-size: 14px
  }
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  
  input {
    border: 0;
    margin-bottom: 12px;
    height: 36px;
    border-radius: 4px;
    padding: 0 8px;
  }
  button {
    height: 36px;
    border: 0;
    border-radius: 4px;
    background-color: #3366ff;
    color: #fff;
    font-size: 18px;
  }
  textare {
    margin-bottom: 12px;
    border: 0;
    height: 90px;
    padding: 8px;
    resize: none;
  }
`
