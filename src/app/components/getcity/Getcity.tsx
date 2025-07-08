"use client"
import { JSX, useEffect, useState } from "react";

// Prop dos dados serem recebidos.
interface cityprop {
  city: {
    "Sao Paulo": number;
    "Rio de Janeiro": number;
    Curitiba: number;
    "Belo Horizonte": number;
    Fortaleza: number;
    Brasília: number;
    "Porto Alegre": number;
    Belém: number;
    Manaus: number;
    Recife: number;
  }
}

// Pega todas as cidades da API.
export default function GetCity(): JSX.Element {
  const [city, setCity] = useState<cityprop>(Object);

  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await fetch("https://apimeioambiente.onrender.com/city/");
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
            <h1 className="font-bold">Cidades e seus habitantes:</h1><br />
            <p>São Paulo: {city?.city?.["Sao Paulo"]}</p>
            <p>Rio De Janeiro: {city?.city?.["Rio de Janeiro"]}</p>
            <p>Curitiba: {city?.city?.Curitiba}</p>
            <p>Belo Horizonte: {city?.city?.["Belo Horizonte"]}</p>
            <p>Fortaleza: {city?.city?.Fortaleza}</p>
            <p>Brasília: {city?.city?.Brasília}</p>
            <p>Porto Alegre: {city?.city?.["Porto Alegre"]}</p>
            <p>Belém: {city?.city?.Belém}</p>
            <p>Manaus: {city?.city?.Manaus}</p>
            <p>Recife: {city?.city?.Recife}</p>
          </li>
      </ul>
    </div>
  );
}
