import Spinner from "./Spinner"

const Cards =({loadingData, showData, weather, forecast})=>{

    if (loadingData){
        return <Spinner />
    }

    return(
        <div className="bg-slate-500 w-5/12 mt-10 mb-10 text-stone-200 flex-col m-auto p-3 justify-center rounded-md">
          
        </div>
    )
}
export default Cards