"use client"
import { JSX, useEffect, useState } from "react"

interface mainprop {
  Main: {
    Importancia: string;
    Dever: string;
  };
}

export default function GetInfo(): JSX.Element {
  const [main, setMain] = useState<mainprop>(Object);

  useEffect(() => {
    async function fetchMain() {
      try {
        const response = await fetch("https://apimeioambiente.onrender.com");
        if (!response.ok) {
          throw new Error("Erro durante o carregamento!");
        }
        const data = await response.json();
        setMain(data);
      } catch (error) {
        console.log("Erro durante a requisição!", error);
      }
    }

    fetchMain();
  }, []);

  console.log(typeof(main))
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Informações da API</h1>
      <ul className="bg-white text-black p-4 rounded shadow mb-4 flex flex-wrap gap-2">
          <li>
            <h2 className="font-bold">Info</h2>
            <p>Importancia: {main.Main.Importancia}</p>
            <p>Dever: {main.Main.Dever}</p>
          </li>
      </ul>
    </div>
  );
}
