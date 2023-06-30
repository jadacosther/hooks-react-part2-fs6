import {createContext, useEffect, useState  } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'


export const UserContext = createContext({id: 0, name:"", lastName: ""});

export default function App(){
  const[user]= useState({
    id:1,
    name: "Pepito",
    lastName: "Perez"
  })

  useEffect(()=>{
  
  },[user])

  return(
    <>
      <h1>Reac hooks - contexto - referncias - FS6</h1>
      <UserContext.Provider value={user}>
        <Header></Header> 
        <Body></Body> 
      </UserContext.Provider>  

    </>
  )

}



// export default function App() {
//   const [count] = useState(2);
//   const [theme, setTheme] = useState('light');
//   return (
//     <>
//     <h1>Hello Class FS06 - React Hooks - Part {count}</h1>
//     <h3>useContext - useRef - useMemo</h3>
//     <ThemeContext.Provider value={theme}>
//       <Form />
//       <label>
//         <input
//           type="checkbox"
//           checked={theme === 'dark'}
//           onChange={(e) => {
//             setTheme(e.target.checked ? 'dark' : 'light')
//           }}
//         />
//         Usar modo oscuro
//       </label>
//     </ThemeContext.Provider>
//     </>
//   )
  
// }



// function Form({ children }) {
//   return (
//     <Panel title="Bienvenido">
//       <Button>Registrarse</Button>
//       <Button>Iniciar sesión</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className}>
//       {children}
//     </button>
//   );
// }



