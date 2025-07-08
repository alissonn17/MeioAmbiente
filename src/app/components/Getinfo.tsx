"use client"
import { JSX, useEffect, useState } from "react";

// Prop dos dados serem recebidos.
interface mainprop {
  Main: {
    Importancia: string;
    Dever: string;
  }
}

// Pega informações sobre da API.
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
  
  return (
    <div id="last" className="bg-white text-black p-4 rounded-2xl shadow mb-4">
      <h1 className="font-bold">Qual a importância e o nosso dever?</h1><br />
      <ul className=" flex flex-wrap gap-2 max-w-6xl">
          <li>
            <p><strong>Importancia</strong>: {main?.Main?.Importancia}</p>
            <p><strong>Dever</strong>: {main?.Main?.Dever}</p>
          </li>
      </ul>
    </div>
  );
}
