import { useState, useEffect } from 'react'
import { Container, Form, List } from './styles.js'
import firebase from './../../firebaseConnection'
import { doc, deleteDoc } from 'firebase/firestore'
export default function Admin() {
  const { auth, db } = firebase
  const [tarefaInput, setTarefaInput] = useState('')
  const [user, setUser] = useState('')
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function loadTarefas() {
      const userDatail = localStorage.getItem('@detailUser')
      setUser(JSON.parse(userDatail))

      if (userDatail) {
        const data = JSON.parse(userDatail)
        const collectionRef = firebase
          .firestore()
          .collection('tarefas')
          .where('userUid', '==', data?.uid)
          .get()
          .then((snapshot) => {
            var lista = []

            snapshot.forEach((doc) => {
              lista.push({
                id: doc.id,
                tarefa: doc.data().tarefa,
                userUid: doc.data().userUid,
              })
            })

            console.log(lista)
            setTarefas(lista)
          })
      }
    }
    loadTarefas()
  }, [])

  const handleRegister = async (e) => {
    e.preventDefault()

    if (tarefaInput === '') {
      alert('Digite sua tarefa...')
      return
    }
    const collectionRef = firebase.firestore().collection('tarefas')
    collectionRef
      .add({
        tarefa: tarefaInput,
        created: new Date(),
        userUid: user?.uid,
      })
      .then(() => {
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

  const deleteTarefa = async (id) => {
    const collectionRef = firebase.firestore().collection('tarefas')
    collectionRef
      .doc(id)
      .delete()
      .then(() => {
        console.log('delete')
      })
    // await deleteDoc(collectionRef)
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
      {tarefas.map((item) => (
        <List key={item.id}>
          <p>{item.tarefa}</p>
          <div>
            <button>Editar</button>
            <button
              className="buttonConcluir"
              onClick={() => deleteTarefa(item.id)}
            >
              Concluir
            </button>
          </div>
        </List>
      ))}

      <button className="buttonlogout" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  )
}
