

const Cards =({loadingData, showData, weather,})=>{

    if (loadingData){
        return <Spinner />
    }

    return(
        <div className="">
          {
            showData === true ? (
                <div className="container">
                    <div className="card bg-slate-200">
                        <div className="">
                            <div className="">

                            </div>
                            <div>
                                <h1>Predicciones</h1>
                            </div>

                        </div>
                    </div>

                </div>
            ):(
                <h2>Sin datos</h2>
            )
          }


        </div>
    )
}
export default Cards