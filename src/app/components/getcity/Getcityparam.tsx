"use client"
import { JSX, useEffect, useState } from "react";

// Prop dos dados serem recebidos.
interface cityprop {
  CityInfo: [
    string,
   {
      destaqueTecnologico: string;
    },
    {
      descricao: string;
    }
  ];
}

// Prop name usada para busca de cidade na API.
interface paramprop{
  name: string;
}

// Pega cidade pelo nome.
export default function Getcityparam({name}: paramprop): JSX.Element {
  const [city, setCity] = useState<cityprop| null>(null);

  useEffect(() => {
    async function fetchCity(){
      try {
        const response = await fetch(`https://apimeioambiente.onrender.com/city/${name}`);
        if (!response.ok) {
          throw new Error("Erro durante o carregamento!");
        }
        const data = await response.json();
        setCity(data);
      } catch (error) {
        console.log("Erro durante a requisição!", error);
      }
    }

    fetchCity();
  }, [name]);

  return (
    <div> {city && (
      <ul className="bg-white text-black p-4 rounded-2xl shadow mb-4 flex flex-wrap gap-2 max-w-6xl">
          <li className="flex flex-col">
            <h2 className="font-bold">Cidade encontrada:</h2><br />
            <p className="self-center"><strong>{name}</strong></p>
            <p>{city.CityInfo[0]}</p>
            <p>Destaque tecnológico: {city.CityInfo[1].destaqueTecnologico}</p>
            <p>Descrição: {city.CityInfo[2].descricao}</p>
          </li>
      </ul>
    )}
    </div>
  );
}
