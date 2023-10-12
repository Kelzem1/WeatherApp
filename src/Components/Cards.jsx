const Cards =({title, days, image})=>{
    return(
        <div className="bg-slate-500 w-5/12 mt-10 mb-10 text-stone-200 flex-col m-auto p-3 justify-center rounded-md">
            <h1>{title}</h1>
            <ul>
                <li>{days}</li>
                <li>{days}</li>
                <li>{days}</li>
                <li>{days}</li>
                <li>{days}</li>
            </ul>
        </div>
    )
}
export default Cards