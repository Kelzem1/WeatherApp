import Forecast from "./Forecast"


const CurrentData = ({loadingData, showData, weather})=>{


    let today = new Date()
    let day = today.getDay()
    let month = today.getMonth() +1
    let year = today.getFullYear()

    let date = day + "/" + month + "/" + year

    let url = ""
    let iconUrl = ""

    if(showData) {
        url = "http://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"
    }

    
   
    return(
        <div className="flex justify-center align-middle mt-12 opacity-80 tracking-widest">
               {
                showData === true ? (
            <div className="justify-center align-middle p-5 bg-indigo-300 bg-opacity-60 text-neutral-950 w-6/12 rounded-sm gap-10 shadow-xl">
                <div className="w-6/12 border-r-2 border-neutral-950 flex-col justify-center align-middle">

                   <div className="flex-col w-6/12 justify-center align-middle m-auto p-3">
                    <h1 className="text-center text-2xl font-semibold">{weather.name}</h1>
                    <h1 className="text-center">{date}</h1> 
                     
                </div>
                
                <div className="flex-col justify-center w-6/12 m-auto p-3">
                    <p className="text-center">{(weather.main.temp_max -273.15).toFixed(1)}</p>
                    <h1 className="text-center flex text-5xl justify-center font-bold">{(weather.main.temp -273.15).toFixed(1)}C</h1>
                    <p className="text-center">{(weather.main.temp_min -273.15).toFixed(1)}</p>
                </div>
                <div className="flex-col justify-center text-center w-6/12 m-auto p-3">
                    <p className="flex justify-center"><img src={iconUrl} alt="icon" /></p>
                    <h2 className="capitalize">{weather.weather[0].description}</h2>
                    
                </div> 
                </div>
                
                 <Forecast />
            </div>

                
            
            ):(
                <h2></h2>
            )
        }
                
        </div>
     
       
    )  
}

export default CurrentData