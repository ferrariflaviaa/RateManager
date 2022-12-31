import { useState } from 'react'
import { Container, Form } from './home.js'
import { Link } from 'react-router-dom'
export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();

    if(email !== '' && password !== ''){
      alert("Teste");
    
    }else{
      alert("Preencha todos os campos");
    }

  }
  return (
    <Container>
      <h1>Lista de tarefas</h1>
      <span>Gerencie sua agenda de forma fácil. </span>

      <Form onSubmit={handleLogin}>
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
        <button type="submit">Acessar</button>
      </Form>
      <Link to="/register" className="buttonLink">
        Não possui uma conta? Cadastre-se
      </Link>
    </Container>
  )
}
