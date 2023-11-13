import { Fragment, useState } from "react"
import Form from "../Form"
import CurrentData from '../CurrentData'

const ApiKey = '147ed690441ebcf171c54ca58cdd922d'





const GetApi = () =>{
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${ApiKey}&lang=es`
  let city = '&q='
  let ApiForecast = `https://api.openweathermap.org/data/2.5/forecast?&appid=${ApiKey}&lang=es`

  const [weather, setWeather]= useState([])
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState([false])
  const [show, setShow] =useState(false)
  const [location, setLocation] = useState([""])

  const getLocation = async(loc) =>{
    setLoading(true)
    setLocation(loc)


    //weather

    apiUrl = apiUrl + city + loc;

    await fetch(apiUrl)
    .then((response) => {
      if(!response.ok) throw {response}
      return response.json()
    }).then((weatherData) =>{
      console.log(weatherData)
      setWeather(weatherData)
    }).catch(error =>{
      console.log(error)
      setLoading(false)
      setShow(false)
    })

    //Forecast

    ApiForecast = ApiForecast + city + loc;

    await fetch(ApiForecast)
    .then((response) => {
      if(!response.ok) throw {response}
      return response.json()
    }).then((forecastData) =>{
      console.log(forecastData)
      setForecast(forecastData)

      setLoading(false)
      setShow(true)

    }).catch(error =>{
      console.log(error)
      setLoading(false)
      setShow(false)
    })
  }

  return(
    <div className="">
       <Form newLocation={getLocation}/>

      <CurrentData
      showData = {show}
      loadingData = {loading}
      weather = {weather}
      forecast = {forecast}
       />
    
    </div>
     
      

      

      
    
      
  
  )

}

export default GetApi