const CurrentData = ({grados, weather, weatherImage, city})=>{
    return(
        <div className="from-slate-200 w-4/5 m-auto flex-col self-center">
            <h1>{city}</h1>
            <h1>{grados}</h1>
            <h2>{weather}</h2>
            <span>{weatherImage}</span>
        </div>
    )
}

export default CurrentData