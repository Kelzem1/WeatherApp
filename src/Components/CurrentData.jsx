import Forecast from "./Forecast"


const CurrentData = ({loadingData, showData, weather, forecast})=>{


    let today = new Date()
    let day = today.getDay()
    let month = today.getMonth() +1
    let year = today.getFullYear()

    let date = day + "/" + month + "/" + year

    let url = ""
    let iconUrl = ""



    //Predicciones
    let iconUrl3= ""

    let iconUrl6= ""

    let iconUrl9= ""

    let iconUrl12= ""

    //End Predicciones
    
    //Fecha de predicciones
    let forecastDate3 = ""
    let forecastDate6 = ""
    let forecastDate9 = ""
    let forecastDate12 = ""

    if(showData) {
        url = "http://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png"
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png"
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png"
        iconUrl12 = url + forecast.list[4].weather[0].icon + ".png"

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)

        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13)

        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13)

        forecastDate12 = forecast.list[4].dt_txt.substring(8, 10) + '/' + forecast.list[4].dt_txt.substring(5, 7) + '/' + forecast.list[4].dt_txt.substring(0, 4) + ' ' + forecast.list[4].dt_txt.substring(11, 13)



    }

    
   
    return(
        <div className="flex justify-center align-middle mt-12 opacity-80 tracking-widest">
               {
                showData === true ? (
            <div className="flex justify-center align-middle p-5 bg-indigo-300 bg-opacity-60 text-neutral-950 w-6/12 rounded-sm gap-10 shadow-xl">
                <div className="w-6/12 flex-col border-r-2 border-black justify-center">

                    <div className="flex-col w-6/12 justify-center align-middle m-auto p-3">
                        <h1 className="text-center text-2xl font-semibold">{weather.name}</h1>
                        <h1 className="text-center">{date}</h1> 
                    </div>

                    <div className="flex-col justify-center text-center w-6/12 m-auto p-3">
                        <p className="flex justify-center"><img src={iconUrl} alt="icon" /></p>
                        <h2 className="capitalize">{weather.weather[0].description}</h2> 
                    </div>

                    <div className="flex justify-center w-6/12 m-auto p-3">
                        <p className="flex align-middle">{(weather.main.temp_max -273.15).toFixed(1) + "°C"}</p>
                        <h1 className="text-center flex text-5xl justify-center font-bold p-5">{(weather.main.temp -273.15).toFixed(1) + "°C"}</h1>
                        <p className="text-center">{(weather.main.temp_min -273.15).toFixed(1) + "°C"}</p>
                    </div>
                    
                
            </div>

            <div className="w-6/12">
                <div className="flex-col w-6/12 justify-center align-middle m-auto">
                    <div className="flex">
                        <p>Viento: </p>
                        <p>{(weather.wind.speed * 3.6).toFixed(1) + "km/h"}</p>
                    </div>
                    <div className="flex">
                        <p>Sensacion termica: </p>
                        <p>{(weather.main.feels_like -273.15 ).toFixed(0) + "°C"}</p>
                    </div>
                    <div className="flex">
                        <p>Humedad: </p>
                        <p>{weather.main.humidity + "%"}</p>
                    </div>
                </div>
                <hr />
                
                <div className="forecast-4 flex">

                    <div className="fore3h flex-col">
                    <p>{forecastDate3}h</p>
                    <p>{(forecast.list[1].main.temp -273.15).toFixed(1) +"°C"} </p>

                    <p className="">
                    <img src={iconUrl3} alt="icon" />
                    {forecast.list[1].weather[0].description}
                    </p>

                    </div>

                    <div className="fore6h flex-col">
                    <p>{forecastDate6}h</p>
                    <p>{(forecast.list[2].main.temp -273.15).toFixed(1) +"°C"} </p>

                    <p className="">
                    <img src={iconUrl6} alt="icon" />
                    {forecast.list[2].weather[0].description}
                    </p>

                    </div>

                    <div className="fore9h flex-col">
                    <p>{forecastDate9}h</p>
                    <p>{(forecast.list[3].main.temp -273.15).toFixed(1) +"°C"} </p>

                    <p className=""><img src={iconUrl9} alt="icon" />
                    {forecast.list[3].weather[0].description}
                    </p>

                    </div>
                    
                    <div className="fore12h">
                    <p>{forecastDate12}h</p>
                    <p>{(forecast.list[4].main.temp -273.15).toFixed(1) +"°C"} </p>

                    <p className=""><img src={iconUrl12} alt="icon" />
                    {forecast.list[4].weather[0].description}
                    </p>

                    </div>
                </div>

            </div>
                
                 
            </div>
            

                
            
            ):(
                <div></div>
            )
        }
                
        </div>
     
       
    )  
}

export default CurrentData