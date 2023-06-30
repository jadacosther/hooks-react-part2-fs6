import {useContext} from 'react'
import {UserContext} from '../App'

export default function Footer(){
    const user = useContext(UserContext)
    return(
      <>
      <div style={{border:'1px solid red'}}>
       <h5>Footer</h5>
       <p>id: {user.id}</p>
       <p>Nombre:{user.name}</p>
       <p>Apelido:{user.lastName}</p> 
       </div>
      </>
    )
  }