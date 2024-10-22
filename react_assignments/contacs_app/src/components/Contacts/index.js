import {React,useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"
function Contacts() {
    const [contacts, setContacs]=useState([
        {
            fullname: "Ahmed",
            phonenumber: "02"
        },
        {
            fullname: "Mohamed",
            phonenumber: "01"
        },
        {
            fullname: "Sayed",
            phonenumber: "03"
        }
    ])

    useEffect(()=>{
        console.log(contacts);        
    },[contacts])

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacs} contacts={contacts}/>
        </div>
    )
}

export default Contacts
