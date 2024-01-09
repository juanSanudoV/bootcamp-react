import React,{useState} from 'react'

const Form2 = () => {
    const[form,setForm]= useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    })
  return (
    <>
    <label>
        First Name
        <input 
          value={form.firstName}
          onChange={e=>{
              setForm({
                  ...form,
                  firstName: e.target.value
              })
          }}
          />
    </label>
    <label>
        Last Name:
        <input
          value={form.lastName}
          onChange={e=>{
              setForm({
                  ...form,
                  lastName: e.target.value
              })
          }}
        />
    </label>
    <label>
        Email:
        <input 
          value={form.email}
          onChange={e=> {
              setForm({
                  ...form,
                  email: e.target.value
              })
          }}
         />
    </label>
    <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email}){' '}
    </p>

    </>
  )
}

export default Form2
