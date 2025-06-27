"use client"
import { useState } from "react"
import Getcountryparam from "./Getcountryparam"

export default function Namecountry(){
    const [country, setCountry] = useState("")
    const [result, setResult] = useState(false)
    const [name, setName] = useState("")

    function getbutton(){
        setName(country)
        setResult(true)
    }

    return (
        <section className="bg-amber-50 flex flex-col items-center p-4">
            <div>
                <label className="font-bold" htmlFor="country">País: </label>
                <input className="bg-blue-300 rounded-2xl border-1 border-black p-1" 
                type="text" 
                name="country" 
                id="inputcity" 
                placeholder="Digite algo" 
                onChange={(country) => setCountry(country.target.value)}/>
            </div><br />
            <button className="bg-blue-200 border-1 border-black rounded-2xl p-1" type="submit" onClick={getbutton}>Enviar</button><br />
            {result && <Getcountryparam name={name}/>}
        </section>
    );
}
