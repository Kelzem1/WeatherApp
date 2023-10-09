const Cards =({title, description, image})=>{
    return(
        <div className="bg-amber-500 w-40 h-40 flex-col center p-5 text-center justify-center rounded">
            <h1>{title}</h1>
            <h4>{description}</h4>
            <span>{image}</span>
        </div>
    )
}
export default Cards