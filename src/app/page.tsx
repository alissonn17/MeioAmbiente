import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import GetInfo from "./components/Getinfo"

export default function Home(){
  return <>
    <Header />
    <Main>
      <section>
        <GetInfo></GetInfo>
      </section>
    </Main>
    <Footer />
  </>
}
