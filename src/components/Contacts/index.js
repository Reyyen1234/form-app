import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./style.css"
function Contacts() {
    const [contacts,setContacts]=useState([])
    useEffect(()=>{
     console.log(contacts)
    },[contacts])
  return (
    <div id='container'>
      <List contacts={contacts}/>
      <Form addContacts ={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
