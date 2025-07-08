"use client"
import { JSX, useEffect, useState } from "react";

// Prop dos dados serem recebidos.
interface cityprop {
    "city": {
    "Sao Paulo": {
      destaqueTecnologico: string;
    },
    "Rio de Janeiro": {
      destaqueTecnologico: string;
    },
    Curitiba: {
      destaqueTecnologico: string;
    },
    "Belo Horizonte": {
      destaqueTecnologico: string;
    },
    Fortaleza: {
      destaqueTecnologico: string;
    },
    Brasília: {
      destaqueTecnologico: string;
    },
    "Porto Alegre": {
      destaqueTecnologico: string;
    },
    Belém: {
      destaqueTecnologico: string;
    },
    Manaus: {
      destaqueTecnologico: string;
    },
    Recife: {
      destaqueTecnologico: string;
    }
  }
}

// Pega os destaques tecnológicos das cidades.
export default function GetCides(): JSX.Element {
  const [city, setCity] = useState<cityprop>(Object);

  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await fetch("https://apimeioambiente.onrender.com/city/destaque/");
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
  }, []);

  return (
    <div>
      <ul className="bg-white text-black p-4 rounded-2xl shadow mb-4 flex flex-wrap gap-2 max-w-6xl">
          <li>
            <h1 className="font-bold">Cidades e seus destaques tecnológicos:</h1><br />
            <p><strong>São Paulo</strong>: {city?.city?.["Sao Paulo"].destaqueTecnologico}</p>
            <p><strong>Rio De Janeiro</strong>: {city?.city?.["Rio de Janeiro"].destaqueTecnologico}</p>
            <p><strong>Curitiba</strong>: {city?.city?.Curitiba.destaqueTecnologico}</p>
            <p><strong>Belo Horizonte</strong>: {city?.city?.["Belo Horizonte"].destaqueTecnologico}</p>
            <p><strong>Fortaleza</strong>: {city?.city?.Fortaleza.destaqueTecnologico}</p>
            <p><strong>Brasília</strong>: {city?.city?.Brasília.destaqueTecnologico}</p>
            <p><strong>Porto Alegre</strong>: {city?.city?.["Porto Alegre"].destaqueTecnologico}</p>
            <p><strong>Belém</strong>: {city?.city?.Belém.destaqueTecnologico}</p>
            <p><strong>Manaus</strong>: {city?.city?.Manaus.destaqueTecnologico}</p>
            <p><strong>Recife</strong>: {city?.city?.Recife.destaqueTecnologico}</p>
          </li>
      </ul>
    </div>
  );
}
