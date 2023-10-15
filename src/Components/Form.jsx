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
            <div className="w-6/12 m-auto mb-10 p-3 text-stone-200 rounded-sm">
                <form onSubmit={onSubmit}>
                    <div className="m-auto flex justify-center">
                        <input type="text" className="form-contrl w-7/12 m-auto h-10 rounded-sm p-3" placeholder="City" onChange={(e) =>setCity(e.target.value)}/>
                        <button className="bg-sky-300 w-1/12 rounded-sm text-stone-100 h-10" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }


export default Form