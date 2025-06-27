import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import GetInfo from "./components/Getinfo"
import Section from "./components/Section"
import GetCity from "./components/getcity/Getcity"
import GetCides from "./components/getcity/Getcides"
import Getcitdescri from "./components/getcity/Getcitdescri"
import Namecity from "./components/getcity/cityname"
import GetCountry from "./components/getcountry/Getcountry"
import GetCoudes from "./components/getcountry/GetCoudes"
import Getdescri from "./components/getcountry/Getdescri"
import Namecountry from "./components/getcountry/countryname"

export default function Home(){
  return <>
    <Header />
    <Main>
      <h1 className="font-bold">API_Meio Ambiente.</h1>
      <p className="text-black max-w-7xl">A seguir temos dados sobre algumas cidades e países e como ambos ajudam o meio-ambiente com seus destaques tecnológicos ou outras ações a favor do meio-ambiente, se quiser pode pesquisar por alguma cidade ou país específico.</p>
      <Section title="Cidades">
        <GetCity />
      </Section><br />
      <Section title="Destaques das cidades">
        <GetCides/>
      </Section><br />
      <Section title="Descrição dos destaques">
        <Getcitdescri />
      </Section><br />
      <Section title="Procure por uma cidade">
        <Namecity />
      </Section><br />
      <Section title="Países">
        <GetCountry />
      </Section><br />
      <Section title="Destaques dos países">
        <GetCoudes />
      </Section><br />
      <Section title="Descrição dos destaques dos países">
        <Getdescri />
      </Section><br />
      <Section title="Procure por um país">
        <Namecountry />
      </Section><br />
      <Section title="Sobre">
        <GetInfo />
      </Section>
    </Main>
    <Footer />
  </>
}
