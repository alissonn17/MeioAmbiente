"use client"
import Image from "next/image";
import Link from "next/link"
import { JSX, useEffect } from "react"

export default function Header(): JSX.Element{
    useEffect(() => {
        const menulinks = document.querySelectorAll<HTMLAnchorElement>('.menu a[href^="#"]');

        function getDistance(element: HTMLAnchorElement): number {
            const id = element.getAttribute("href");
            if (!id) return 0;

            const target = document.querySelector<HTMLElement>(id);
            if (!target) return 0;

            return target.offsetTop;
        }

        function nativescroll(dist: number) {
            window.scroll({
            top: dist,
            behavior: "smooth",
            });
        }

        function scrolltoselection(event: MouseEvent) {
            event.preventDefault();

            const target = event.currentTarget as HTMLAnchorElement;
            const distancetotop = getDistance(target) - 30;

            nativescroll(distancetotop);
        }

        function getScroll() {
            menulinks.forEach((link) => link.addEventListener("click", scrolltoselection));
        }

        getScroll();

        return () => {
            menulinks.forEach((link) => link.removeEventListener("click", scrolltoselection));
        };
    }, []);
    



    return <header className="menu" style={{color:"black",
    backgroundColor:"rgb(32, 102, 207)",
    height:"50px",
    width:"100vw",
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