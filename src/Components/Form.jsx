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
            <div className="pt-24 flex justify-center align-middle">
                <form className="" onSubmit={onSubmit}>
                    <div className="flex justify-center align-middle m-auto">
                        <input type="text" className="rounded-sm p-5 h-14 w-full focus:outline-yellow-100" placeholder="City" onChange={(e) =>setCity(e.target.value)}/>
                        <button className="bg-teal-100 bg-opacity-60 hover:bg-yellow-100 rounded-sm p-2 font-bold text-neutral-950 ml-5" type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }


export default Form