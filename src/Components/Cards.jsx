

const Cards =({showData, forecast})=>{



    return(
        <div className="">
          {
            showData === true ? (
                <div className="container">
                    <div className="card bg-slate-200">
                        
                    </div>

                </div>
            ):(
                <div>
                    
                </div>
            )
          }


        </div>
    )
}
export default Cards