import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import CurrentData from './Components/CurrentData'

function App() {

  return (
   <div className='p-5 bg-slate-300 font-bold m-5 flex-col w-full h-full'>
   <div className='grid gap-10'>
   <CurrentData grados={20} weather={'Llueve'}/>
    <Cards title="Hola" days="2"/>
   </div>
    
    <Navbar />
   </div>
  )
}

export default App
