import { JSX } from "react"

export default function Footer(): JSX.Element{
    return <footer style={{color:"black",
    backgroundColor:"rgb(52, 133, 255)",
    height:"50px",
    width:"100vw",
    padding:"5px",
    display: "flex",
    justifyContent: "center"}}>
        <p>M5-PDA</p>
    </footer>
}