"use client"
import { JSX, useEffect, useState } from "react"

interface resprop {
  Main: {
    Importancia: string;
    Dever: string;
  };
}

/**
 * Get info from main in API-Meio Ambiente.
 */

export default function GetInfo(): JSX.Element {
  const [res, setRes] = useState<resprop | null>(null);


  useEffect(() => {
    async function fetchMain() {
      try {
        const response = await fetch("https://apimeioambiente.onrender.com");
        if (!response.ok) {
          throw new Error("Erro durante o carregamento!");
        }
        const data = await response.json();
        setRes(data);
      } catch (error) {
        console.log("Erro durante a requisição!", error);
      }
    }

    fetchMain();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Informações da API</h1>
      <ul className="bg-white text-black p-4 rounded shadow mb-4 flex flex-wrap gap-2">
        {res?.Main?.Importancia && (
            <li>
                <h2 className="font-bold">Importância</h2>
                <p>{res.Main.Importancia}</p>
            </li>
        )}
        {res?.Main?.Dever && (
        <li>
            <h2 className="font-bold">Dever</h2>
            <p>{res.Main.Dever}</p>
        </li>
        )}
      </ul>
    </div>
  );
}
