"use client"
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

// Header usada na Landing Page.
export default function Header(): JSX.Element{

    return <header className="menu" style={{color:"black",
    backgroundColor:"rgb(32, 102, 207)",
    height:"50px",
    width:"100%",
    padding:"5px",
    display: "flex",
    justifyContent: "space-around"}}>
        <div className="flex flex-row justify-evenly w-full pr-2.5 pl-2.5">
            <ul id="nav" className="flex justify-around w-full">
                <li><Link href="#cidades">Cidades</Link></li>
                <li><Link href="#paises">Países</Link></li>
                <li><Link href="#sobre">Sobre</Link></li>
            </ul>
            <Link href="https://github.com/alissonn17" target="_blank">
                <Image src="/githubLogo.png" alt={"github"} width={50} height={50}/>
            </Link>
        </div>
    </header>
}