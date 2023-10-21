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
            <div className="pt-10 w-12/12 flex justify-center">
                <form className="" onSubmit={onSubmit}>
                    <div className="flex justify-center align-middle w-12/12">
                        <input type="text" className="rounded-sm p-2 focus:outline-indigo-300" placeholder="City" onChange={(e) =>setCity(e.target.value)}/>
                        <button className="bg-indigo-500 bg-opacity-60 hover:bg-indigo-200 rounded-sm p-2 font-bold text-neutral-950 ml-5" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }


export default Form