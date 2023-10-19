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
            <div className="p-3 text-stone-200 rounded-sm flex justify-center align-middle">
                <form onSubmit={onSubmit}>
                    <div className="m-auto">
                        <input type="text" className="form-contrl m-auto rounded-sm p-3" placeholder="City" onChange={(e) =>setCity(e.target.value)}/>
                        <button className="bg-sky-300 rounded-sm text-stone-100 ml-5" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }


export default Form