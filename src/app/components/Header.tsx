"use client"
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
    justifyContent: "space-between"}}>
        <ul className="flex justify-around w-full">
            <li><Link href="#cidades">Cidades</Link></li>
            <li><Link href="#paises">Países</Link></li>
            <li><Link href="#sobre">Sobre</Link></li>
        </ul>
    </header>
}