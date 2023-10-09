const Cards =({title, days, image})=>{
    return(
        <div className="bg-amber-500 w-40 h-40 flex-col center p-5 text-center justify-center rounded">
            <h1>{title}</h1>
            <ul>
                <li>{days}</li>
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