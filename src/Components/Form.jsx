import { useState } from "react"


const Form = ({newLocation}) => {
     const [city, setCity] = useState("")

    const onSubmit = (e) =>{
         e.preventDefault()
        console.log(city)
        if(city === "" || !city) return
        newLocation(city)
        }
        return(
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text" className="form-contrl" placeholder="City" onChange={(e) =>setCity(e.target.value)}/>
                        <button className="" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }


export default Form