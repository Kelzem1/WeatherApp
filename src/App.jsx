import './App.css'
import Cards from './Components/Cards'
import CurrentData from './Components/CurrentData'
import GetApi from './Components/Services/GetApi'

function App() {

  return (
   <div className=' bg-cyan-100 flex-col h-screen'>
      <GetApi />
      <div className='flex-col text-center'>
        <CurrentData grados={20} weather={'Llueve'} city={'Nerja'}/>
        <Cards />
        
      </div>
   </div>
  )
}

export default App
