import { useState } from 'react'
import { Container, Form, List } from './admin.js'
import firebase from './../../firebaseConnection'
export default function Admin() {
  const { auth } = firebase
  const [tarefaInput, setTarefaInput] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    alert('clicou')
  }

  const handleLogout = async () => {
    await auth().signOut(auth);
  }
  return (
    <Container>
      <h1>Minhas Tarefas</h1>

      <Form onSubmit={handleRegister}>
        <textarea
          placeholder="Digite sua tarefa..."
          value={tarefaInput}
          onChange={(e) => setTarefaInput(e.target.value)}
        />
        <button className="buttonRegistre" type="submit">
          Registar sua tarefa
        </button>
      </Form>
      <List>
        <p>Estudar js</p>
        <div>
          <button>Editar</button>
          <button className="buttonConcluir">Concluir</button>
        </div>
      </List>

      <button className="buttonlogout" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  )
}
