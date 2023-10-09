const CurrentData = ({grados, weather, weatherImage})=>{
    return(
        <div className="bg-gradient-to-t from-slate-600 w-2/3">
            <h1>{grados}</h1>
            <h2>{weather}</h2>
            <span>{weatherImage}</span>
        </div>
    )
}

export default CurrentData