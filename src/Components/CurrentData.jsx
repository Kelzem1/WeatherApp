


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
        <div className="flex justify-center align-middle mt-12 opacity-80">
               {
                showData === true ? (
            <div className="flex justify-center align-middle p-10 bg-teal-900 text-stone-200 w-5/12 rounded-xl gap-10 border border-indigo-200">

                <div className="flex-col w-4/12 justify-center align-middle border-r-2 p-3">
                    <h1 className="text-center text-2xl font-semibold">{weather.name}</h1>
                    <h1 className="text-center">{date}</h1> 
                     
                </div>
                
                <div className="flex-col justify-center w-4/12 align-middle p-3">
                    <p className="text-center">{(weather.main.temp_max -273.15).toFixed(1)}</p>
                    <h1 className="text-center text-3xl font-bold">{(weather.main.temp -273.15).toFixed(1)}C</h1>
                    <p className="text-center">{(weather.main.temp_min -273.15).toFixed(1)}</p>
                </div>
                <div className="flex-col w-4/12 p-3 border-l-2">
                    <p className=""><img src={iconUrl} alt="icon" /></p>
                    <h2 className="capitalize">{weather.weather[0].description}</h2>
                    
                </div>
                
            </div>
           
            
            ):(
                <h2>Sin datos</h2>
            )
        }
        </div>
     
       
    )  
}

export default CurrentData