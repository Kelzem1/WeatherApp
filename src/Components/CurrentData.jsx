


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
            <div className="bg-sky-400 mt-2 p-5 text-stone-200 w-2/12 m-auto flex-col justify-center self-center rounded-sm">
                <h1 className="text-center">{weather.name}</h1>
                <h1 className="text-center">{date}</h1>
                <h1 className="text-center">{(weather.main.temp -273.15).toFixed(1)}C</h1>
                <h2 className="text-center">{weather.weather[0].description}</h2>
                


                <div>
                    <img>
                    </img>
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