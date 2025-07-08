"use client"
import { JSX, useEffect, useState } from "react";

// Prop dos dados serem recebidos.
interface cityprop {
    "city": {
    "Sao Paulo": {
      descricao: string;
    },
    "Rio de Janeiro": {
      descricao: string;
    },
    Curitiba: {
      descricao: string;
    },
    "Belo Horizonte": {
      descricao: string;
    },
    Fortaleza: {
      descricao: string;
    },
    Brasília: {
      descricao: string;
    },
    "Porto Alegre": {
      descricao: string;
    },
    Belém: {
      descricao: string;
    },
    Manaus: {
      descricao: string;
    },
    Recife: {
      descricao: string;
    }
  }
}

// Pega a descrição das cidades.
export default function Getcitdescri(): JSX.Element {
  const [city, setCity] = useState<cityprop>(Object);

  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await fetch("https://apimeioambiente.onrender.com/city/descricao/");
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
            <h1 className="font-bold">Descrição dos destaques tecnológicos de cada cidade:</h1><br />
            <p><strong>São Paulo</strong>: {city?.city?.["Sao Paulo"].descricao}</p>
            <p><strong>Rio De Janeiro</strong>: {city?.city?.["Rio de Janeiro"].descricao}</p>
            <p><strong>Curitiba</strong>: {city?.city?.Curitiba.descricao}</p>
            <p><strong>Belo Horizonte</strong>: {city?.city?.["Belo Horizonte"].descricao}</p>
            <p><strong>Fortaleza</strong>: {city?.city?.Fortaleza.descricao}</p>
            <p><strong>Brasília</strong>: {city?.city?.Brasília.descricao}</p>
            <p><strong>Porto Alegre</strong>: {city?.city?.["Porto Alegre"].descricao}</p>
            <p><strong>Belém</strong>: {city?.city?.Belém.descricao}</p>
            <p><strong>Manaus</strong>: {city?.city?.Manaus.descricao}</p>
            <p><strong>Recife</strong>: {city?.city?.Recife.descricao}</p>
          </li>
      </ul>
    </div>
  );
}
