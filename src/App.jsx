import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Styles/Cards'

function App() {

  return (
   <div className='font-bold m-5 m-auto flex-col w-full h-full'>
    <Cards title="Hola" description="Hace calor"/>
    <Cards title="Esta nublao" description="Hace frio"/>
    <Navbar />
   </div>
  )
}

export default App
