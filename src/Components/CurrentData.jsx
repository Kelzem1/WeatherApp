
import Date from "./Date"

const CurrentData = ({loadingData, showData, weather})=>{
   
    return(
        <div>
               {
                showData === true ? (
            <div className="bg-sky-400 mt-2 p-5 text-stone-200 w-2/12 m-auto flex-col justify-center self-center rounded-sm">
                <h1>{weather.name}</h1>
                <h1>{(weather.main.temp -273.15).toFixed(1)}C</h1>
                <h2>{weather.weather[0].description}</h2>
                


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