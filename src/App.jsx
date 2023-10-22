import './App.css'
import CurrentData from './Components/CurrentData'
import Forecast from './Components/Forecast'
import GetApi from './Components/Services/GetApi'

function App() {

  return (
   <div className=' bg-gray-300 flex-col h-screen'>
      <GetApi />
      <div className='flex-col text-center'>
        <CurrentData />
        
      </div>
   </div>
  )
}

export default App
