import './App.css'
import Cards from './Components/Cards'
import CurrentData from './Components/CurrentData'
import GetApi from './Components/Services/GetApi'

function App() {

  return (
   <div className=' bg-slate-950 flex-col h-screen'>
      <GetApi />
      <div className='flex-col text-center'>
        <CurrentData grados={20} weather={'Llueve'} city={'Nerja'}/>
        <Cards title="Hola" days="2"/>
      </div>
    
    
   </div>
  )
}

export default App
