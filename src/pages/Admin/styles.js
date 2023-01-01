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
    margin-bottom: 28px;
  }

  .buttonRegistre {
    margin-bottom: 28px;
  }

  .buttonlogout {
    position: absolute;
    font-weight: bold;
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 30px;
    bottom: 6%;
    left: 4%;
    background-color: rgba(219, 38, 41, 0.35);
    color: #fafafa;
    transition: all 0.5s;

    :hover {
      background-color: rgba(219, 38, 41, 1);
      color: #fff;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;

  button {
    height: 36px;
    border: 0;
    border-radius: 4px;
    background-color: #3366ff;
    color: #fff;
    font-size: 18px;
  }
  textarea {
    font-size: 1rem;
    margin-bottom: 12px;
    border: 0;
    height: 90px;
    padding: 8px;
    resize: none;
  }
`
export const List = styled.article`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(18, 18, 0, 38);
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 14px 8px;

  p {
    margin-bottom: 8px;
  }

  button {
    margin-right: 8px;
    border: 0;
    border-radius: 4px;
    padding: 4px;
  }

  .buttonConcluir {
    color: #ffcc23;
    background-color: transparent;
  }
`
