import { JSX } from "react";

// Footer usado na Landing Page.
export default function Footer(): JSX.Element{
    
    return <footer style={{color:"black",
    backgroundColor:"rgb(32, 102, 207)",
    height:"50px",
    width:"100vw",
    padding:"5px",
    display: "flex",
    justifyContent: "center"}}>
        <p>M5-PDA</p>
    </footer>
}