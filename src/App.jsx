import './App.css'
import CurrentData from './Components/CurrentData'
import GetApi from './Components/Services/GetApi'

function App() {

  return (
   <div className=' bg-gray-900 flex-col h-screen'>
      <GetApi />
      <div className='flex-col'>
        <CurrentData />
        
      </div>
   </div>
  )
}

export default App
