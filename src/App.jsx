import './App.css'
import Cards from './Components/Cards'
import CurrentData from './Components/CurrentData'
import GetApi from './Components/Services/GetApi'

function App() {

  return (
   <div className=' bg-gray-300 flex-col h-screen'>
      <GetApi />
      <div className='flex-col text-center'>
        <CurrentData />
        <Cards />
        
      </div>
   </div>
  )
}

export default App
