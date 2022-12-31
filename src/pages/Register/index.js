import { useState } from 'react'
import { Container, Form } from './register.js'
import { Link } from 'react-router-dom'
import firebase from './../../firebaseConnection'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    const { auth } = firebase

    if (email !== '' && password !== '') {
      await auth().createUserWithEmailAndPassword( email, password)
      .then(() => {
        navigate('/admin', {replace: true})
      })
      .catch(() => {
        console.log("ERRO AO FAZER O CADASTRO")
      })
    } else {
      alert('Preencha todos os campos')
    }
  }
  return (
    <Container>
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta! </span>

      <Form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="*************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/" className="buttonLink">
        já possui uma conta? Faça o login!
      </Link>
    </Container>
  )
}
