"use client"
import { useState } from "react"
import Getcountryparam from "./Getcountryparam"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.enum([
    "Suécia",
    "Noruega",
    "Dinamarca",
    "Alemanha",
    "Finlândia",
    "Nova Zelândia",
    "Uruguai",
    "Portugal",
    "França"
  ])
});

type schemaSearch = z.infer<typeof schema>

export default function Namecountry(){
    const [result, setResult] = useState(false)
    const [name, setName] = useState("")

    const {
    register,
    handleSubmit,
    formState: { errors }, 
    reset
    } = useForm<schemaSearch>({
        resolver: zodResolver(schema)
    });

    function onSubmit(data: schemaSearch){
        setName(data.name)
        setResult(true)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-amber-50 flex flex-col rounded-2xl items-center p-4">
            <h1 className="font-bold">Procure por um país.</h1><br />
            <div>
                <label className="font-bold" htmlFor="country">País: </label>
                <input className="bg-blue-300 rounded-2xl border-1 border-black p-1" 
                type="text" 
                {...register("name")}
                id="inputcountry" 
                placeholder="Digite o nome do País." />
                {errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                    {errors.name.message} 
                    </span>
                )}
            </div><br />
            <button className="bg-blue-200 border-1 border-black rounded-2xl p-1" type="submit">Enviar</button><br />
            {result && <Getcountryparam name={name}/>}
        </form>
    );
}
