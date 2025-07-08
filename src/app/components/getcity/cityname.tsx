"use client"
import { useState } from "react";
import Getcityparam from "./Getcityparam";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema de validação zod.
const schema = z.object({
  name: z.enum([
    "Sao Paulo",
    "Rio de Janeiro",
    "Curitiba",
    "Belo Horizonte",
    "Fortaleza",
    "Brasília",
    "Porto Alegre",
    "Belém",
    "Manaus",
    "Recife"
  ])
});

// Define um tipo TypeScript baseado automaticamente no esquema 'schema' do Zod.
type schemaSearch = z.infer<typeof schema>;

// Pesquisa de cidade.
export default function Namecity(){
    const [result, setResult] = useState(false);
    const [name, setName] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }, 
        reset
        } = useForm<schemaSearch>({
            resolver: zodResolver(schema)
    });
    
    function onSubmit(data: schemaSearch){
        setName(data.name);
        setResult(true);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-amber-50 flex flex-col rounded-2xl items-center p-4">
            <h1 className="font-bold">Procure por uma cidade.</h1><br />
            <div>
                <label className="font-bold" htmlFor="city">Cidade: </label>
                <input className="bg-blue-300 rounded-2xl border-1 border-black p-1" 
                type="text" 
                {...register("name")}
                id="inputcity" 
                placeholder="Digite o nome da cidade." />
                {errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                    {errors.name.message} 
                    </span>
                )}
            </div><br />
            <button className="bg-blue-200 border-1 border-black rounded-2xl p-1" type="submit">Enviar</button><br />
            {result && <Getcityparam name={name}/>}
        </form>
    );
}
