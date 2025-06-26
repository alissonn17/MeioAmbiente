"use client"
import { JSX, useEffect, useState } from "react"

interface resprop{
    info: string;
}

export default function GetInfo(): JSX.Element{
    const [res, setRes]=useState<resprop[]>([]);

    useEffect(()=>{async function fetchMain(){
        try{
            const response = await fetch("https://apimeioambiente.onrender.com");
            if (!response.ok){
                throw new Error("Erro durante o carregamento!");
            }

            const data = await response.json();
            setRes(data);

        } catch(error) {
            console.log("Erro durante a requisição!", error);
        }
    }

    fetchMain();
},[]);

    console.log(res)
    return <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-wrap gap-2">
            {res.map((res)=>(
                <li className="bg-white text-black p-4 rounded shadow mb-4">
                    <h2 className="font-bold">{res.info}</h2>
                </li>
            ))}
        </ul>
    </div>
}