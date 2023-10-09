import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Styles/Cards'

function App() {

  return (
   <div className='p-5 bg-slate-300 font-bold m-5 flex-col w-full h-full'>
   <div className='grid gap-10'>
    <Cards title="Hola" description="Hace calor"/>
    <Cards title="Esta nublao" description="Hace frio"/>
   </div>
    
    <Navbar />
   </div>
  )
}

export default App
