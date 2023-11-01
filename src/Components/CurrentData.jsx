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

        iconUrl3 = url + forecast.list[1].weather[0].icon + "png"
        iconUrl6 = url + forecast.list[2].weather[0].icon + "png"
        iconUrl9 = url + forecast.list[3].weather[0].icon + "png"
        iconUrl12 = url + forecast.list[4].weather[0].icon + "png"

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate12 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)


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
                    
                    <div className="flex-col justify-center w-6/12 m-auto p-3">
                        <h1 className="text-center font-semibold pb-3 text-xl">Temperatura: </h1>
                        <p className="text-center">{(weather.main.temp_max -273.15).toFixed(1) + "°C"}</p>
                        <h1 className="text-center flex text-5xl justify-center font-bold p-5">{(weather.main.temp -273.15).toFixed(1) + "°C"}</h1>
                        <p className="text-center">{(weather.main.temp_min -273.15).toFixed(1) + "°C"}</p>
                    </div>
                    <div className="flex-col justify-center text-center w-6/12 m-auto p-3">
                        <p className="flex justify-center"><img src={iconUrl} alt="icon" /></p>
                        <h2 className="capitalize">{weather.weather[0].description}</h2>
                        
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
            </div>
                
                 
            </div>
            

                
            
            ):(
                <Forecast />
            )
        }
                
        </div>
     
       
    )  
}

export default CurrentData