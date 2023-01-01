import { useState, useEffect } from 'react'
import { Container, Form, List } from './styles.js'
import firebase from './../../firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'
export default function Admin() {
  const { auth, db, firestore} = firebase;
  const [tarefaInput, setTarefaInput] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    async function loadTarefas() {
      const userDatail = localStorage.getItem('@detailUser')
      setUser(JSON.parse(userDatail))
    }
    loadTarefas()
  }, [])

  const handleRegister = async (e) => {
    e.preventDefault()

    if (tarefaInput === '') {
      alert('Digite sua tarefa...')
      return
    }
    const collectionRef = firebase.firestore().collection('tarefas');
    collectionRef.add({
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid,
    }).then(() => {
      console.log('Tarefa Registrada')
      setTarefaInput('')
    })
    .catch((error) => {
      console.log('ERROR AO REGISTRAR' + error)
    })
  }

  const handleLogout = async () => {
    await auth().signOut(auth)
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
