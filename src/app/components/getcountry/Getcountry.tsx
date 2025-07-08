"use client"
import { JSX, useEffect, useState } from "react";

// Prop dos dados serem recebidos.
interface countryprop {
  country: {
    Suecia: string;
    Noruega: string;
    Dinamarca: string;
    Alemanha: string;
    "Costa Rica": string;
    Finlândia: string;
    "Nova Zelândia": string;
    Uruguai: string;
    Portugal: string;
    França: string;
  }
}

// Pega todas os países da API.
export default function GetCountry(): JSX.Element {
  const [country, setCountry] = useState<countryprop>(Object);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch("https://apimeioambiente.onrender.com/country/");
        if (!response.ok) {
          throw new Error("Erro durante o carregamento!");
        }
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.log("Erro durante a requisição!", error);
      }
    }

    fetchCountry();
  }, []);

  return (
    <div>
      <ul className="bg-cyan-100 text-black p-4 rounded-2xl shadow mb-4 flex flex-wrap gap-2 max-w-6xl">
          <li>
            <h1 className="font-bold">Países e seus habitantes:</h1><br />
            <p><strong>Suécia</strong>: {country?.country?.Suecia}</p>
            <p><strong>Noruega</strong>: {country?.country?.Noruega}</p>
            <p><strong>Dinamarca</strong>: {country?.country?.Dinamarca}</p>
            <p><strong>Alemanha</strong>: {country?.country?.Alemanha}</p>
            <p><strong>Costa Rica</strong>: {country?.country?.["Costa Rica"]}</p>
            <p><strong>Finlândia</strong>: {country?.country?.Finlândia}</p>
            <p><strong>Nova Zelândia</strong>: {country?.country?.["Nova Zelândia"]}</p>
            <p><strong>Uruguai</strong>: {country?.country?.Uruguai}</p>
            <p><strong>Portugal</strong>: {country?.country?.Portugal}</p>
            <p><strong>França</strong>: {country?.country?.França}</p>
          </li>
      </ul>
    </div>
  );
}
