import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import GetInfo from "./components/Getinfo";
import Section from "./components/Section";
import GetCity from "./components/getcity/Getcity";
import GetCides from "./components/getcity/Getcides";
import Getcitdescri from "./components/getcity/Getcitdescri";
import Namecity from "./components/getcity/cityname";
import GetCountry from "./components/getcountry/Getcountry";
import GetCoudes from "./components/getcountry/GetCoudes";
import Getdescri from "./components/getcountry/Getdescri";
import Namecountry from "./components/getcountry/countryname";
import Image from "next/image";

export default function Home(){
  return <>
    <Header />
    <Main>
      <h1 id="titulo" className="font-bold">API_Meio Ambiente.</h1>
      <p className="text-black max-w-7xl">A seguir temos dados sobre algumas cidades e países e como ambos ajudam o meio-ambiente com seus destaques tecnológicos ou outras ações a favor do meio-ambiente, se quiser pode pesquisar por alguma cidade ou país específico.</p><br />
      <Image src="/pngwing.com.png" alt="Meio ambiente ilustração" width={200} height={125} />

      <section id="cidades" className="flex flex-col justify-center items-center border-2 rounded-2xl max-w-7xl p-1.5">
          <h1 className="font-bold">Dados sobre as Cidades.</h1>
          <Section>
            <GetCity />
          </Section><br />
          <Section>
            <GetCides/>
          </Section><br />
          <Section>
            <Getcitdescri />
          </Section><br />
          <Section>
            <Namecity />
          </Section><br />
      </section><br />

      <section id="paises" className="flex flex-col justify-center items-center border-2 rounded-2xl max-w-7xl p-1.5">
        <h1 className="font-bold">Dados sobre os Países.</h1>
        <Section>
          <GetCountry />
        </Section><br />
        <Section>
          <GetCoudes />
        </Section><br />
        <Section>
          <Getdescri />
        </Section><br />
        <Section>
          <Namecountry />
        </Section><br />
      </section><br />

      <section id="sobre" className="flex flex-col justify-center items-center border-2 rounded-2xl max-w-7xl p-1.5">
        <h1 className="font-bold">Sobre</h1>
        <GetInfo />
      </section>
    </Main>
    <Footer />
  </>
}
