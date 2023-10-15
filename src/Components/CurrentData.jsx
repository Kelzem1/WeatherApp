import GetApi from "./Services/GetApi"

const CurrentData = ({loadingData, showData, weather})=>{
    return(
        <div className="bg-sky-400 mt-2 p-5 text-stone-200 w-2/12 m-auto flex-col justify-center self-center rounded-sm">
            <h1>{weather.name}</h1>
            <h1>{(weather.main.temp -273.15).toFixed(1)}C</h1>
            <h2>{}</h2>
        </div>
    )
}

export default CurrentData