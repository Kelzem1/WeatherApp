


const CurrentData = ({loadingData, showData, weather})=>{


    let today = new Date()
    let day = today.getDay()
    let month = today.getMonth() +1
    let year = today.getFullYear()

    let date = day + "/" + month + "/" + year
   
    return(
        <div>
               {
                showData === true ? (
            <div className="current-info p-3 bg-teal-100 text-stone-900 w-3/12 m-auto flex-col justify-center rounded-sm">
                <h1 className="text-center text-2xl font-semibold">{weather.name}</h1>
                <h1 className="text-center">{date}</h1>
                <div>
                    <p>{(weather.main.temp_max -273.15).toFixed(1)}</p>
                    <h1 className="text-center text-3xl font-bold">{(weather.main.temp -273.15).toFixed(1)}C</h1>
                    <p>{(weather.main.temp_min -273.15).toFixed(1)}</p>
                </div>
                
                <h2 className="text-center capitalize">{weather.weather[0].description}</h2>  
            </div>
           
            
            ):(
                <h2>Sin datos</h2>
            )
        }
        </div>
     
       
    )  
}

export default CurrentData