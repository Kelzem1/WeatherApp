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
            <div className="bg-slate-700 w-5/12 m-auto mb-10 p-3 text-stone-200">
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text" className="form-contrl" placeholder="City" onChange={(e) =>setCity(e.target.value)}/>
                        <button className="pl-3" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }


export default Form