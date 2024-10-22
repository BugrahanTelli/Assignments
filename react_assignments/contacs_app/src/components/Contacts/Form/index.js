import {React,useState,useEffect} from 'react'

const initialFormValues = {fullname:"",phonenumber:""}
function Form({addContact,contacts}) {    
    const [form,setForm] = useState(initialFormValues)

    useEffect(()=>{
        setForm(initialFormValues)
    },[contacts])
    const onChangeInput = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    } 

    const onSubmit = (e)=>{
        e.preventDefault()

        if(form.fullname === '' || form.phonenumber === ''){
            return false
        }

        addContact([...contacts,form])
        
    }
        

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name='fullname' placeholder='Full name' value={form.fullname} onChange={onChangeInput}/>
            </div>
            <div>
                <input name='phonenumber' placeholder='Phone number' value={form.phonenumber} onChange={onChangeInput}/>
            </div>
            <div className='btn'>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
