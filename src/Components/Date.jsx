const Date = () =>{
    let today = new Date()
    let day = today.getDay()
    let month = today.getMonth() +1
    let year = today.getFullYear()

    let date = day + "/" + month + "/" + year

    
    return(
        date
    )
}


export default Date