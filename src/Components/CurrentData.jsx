import GetApi from "./Services/GetApi"

const CurrentData = ({newGrados, city, weather})=>{
    return(
        <div className="bg-sky-400 mt-2 p-5 text-stone-200 w-2/12 m-auto flex-col justify-center self-center rounded-sm">
            <h1>{city}</h1>
            <h1>{newGrados}</h1>
            <h2>{weather}</h2>
        </div>
    )
}

export default CurrentData