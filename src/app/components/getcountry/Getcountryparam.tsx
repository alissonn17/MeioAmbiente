"use client"
import { JSX, useEffect, useState } from "react";

// Prop dos dados serem recebidos.
interface countryprop {
  CountryInfo: [
    string,
    string,
    string
  ];
}

// Prop name usada para busca de país na API.
interface paramprop{
  name: string;
}

// Pega país pelo nome.
export default function Getcountryparam({name}: paramprop): JSX.Element {
  const [country, setCountry] = useState<countryprop | null>(null);

  useEffect(() => {
    async function fetchCountry(){
      try {
        const response = await fetch(`https://apimeioambiente.onrender.com/country/${name}`);
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
  }, [name]);

  return (
    <div> {country && (
      <ul className="bg-cyan-100 text-black p-4 rounded-2xl shadow mb-4 flex flex-wrap gap-2 max-w-6xl">
          <li className="flex flex-col">
            <h2 className="font-bold">País encontrado:</h2><br />
            <p className="self-center"><strong>{name}</strong></p>
            <p>{country.CountryInfo[0]}</p>
            <p>Destaque tecnológico: {country.CountryInfo[1]}</p>
            <p>Descrição: {country.CountryInfo[2]}</p>
          </li>
      </ul>
    )}
    </div>
  );
}
