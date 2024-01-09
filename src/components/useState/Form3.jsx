import React,{useState} from 'react'

const Form3 = () => {
    const [person, setPerson] = useState({
        name: 'Niki de Daint Phalle',
        artwork:{
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })

   const handleNameChange = (e) => {
       setPerson({
           ...person,
           name: e.target.value
       });
   }
   const handleTitleChange = (e)=>{
      setPerson({
          ...person,
          artwork:{
              ...person.artwok,
              title: e.target.value
          }
      })
   }

   const handleCityChange = (e) =>{
       setPerson({
           ...person,
           artwork:{
               ...person.artwork,
               city: e.target.value
           }
       })
   }

   const handleImageChange = (e) =>{
       setPerson({
           ...person,
           artwork:{
               ...person.artwork,
               image: e.target.value
           }
       })
   }

  
  return (
    <>
    <label>
        Name:
        <input 
          value={person.name}
          onChange={handleNameChange}/>
    </label>

    <label>
        Title:
        <input 
          value={person.artwork.title}
          onChange={handleTitleChange}/>
    </label>

    <label>
        City:
        <input 
          value={person.artwork.city}
          onChange={handleCityChange}/>
    </label>
    <label>
        City:
        <input 
          value={person.artwork.image}
          onChange={handleImageChange}/>
    </label>

    <p>
        <i>{person.artwork.title}</i>
        {' BY '}
        <i>{person.name}</i>

        <br />
        (located in {person.artwork.city})
    </p>
    <img
       src={person.artwork.image}
       alt={person.artwork.title}/>
    </>
  )
}

export default Form3