"use client"
import { useState } from "react"
import Getcityparam from "./Getcityparam"

export default function Namecity(){
    const [city, setCity] = useState("")
    const [result, setResult] = useState(false)
    const [name, setName] = useState("")

    function getbutton(){
        setName(city)
        setResult(true)
    }

    return (
        <section className="bg-amber-50 flex flex-col items-center p-4">
            <div>
                <label className="font-bold" htmlFor="city">Cidade: </label>
                <input className="bg-blue-300 rounded-2xl border-1 border-black p-1" 
                type="text" 
                name="city" 
                id="inputcity" 
                placeholder="Digite algo" 
                onChange={(city) => setCity(city.target.value)}/>
            </div><br />
            <button className="bg-blue-200 border-1 border-black rounded-2xl p-1" type="submit" onClick={getbutton}>Enviar</button><br />
            {result && <Getcityparam name={name}/>}
        </section>
    );
}
