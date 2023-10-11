import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import CurrentData from './Components/CurrentData'

function App() {

  return (
   <div className=' bg-slate-100 font-bold flex-col w-auto h-full'>
      <Navbar />
      
      <div className='flex-col'>
        <CurrentData grados={20} weather={'Llueve'} city={'Nerja'}/>
        <Cards title="Hola" days="2"/>
      </div>
    
    
   </div>
  )
}

export default App
