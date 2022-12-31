import { useState } from 'react'
import { Container, Form } from './register.js'
import { Link } from 'react-router-dom'
export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault();

    if(email !== '' && password !== ''){
      alert("Teste");
    
    }else{
      alert("Preencha todos os campos");
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
