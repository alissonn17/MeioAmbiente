import { JSX } from "react";

interface sectionprop{
    title: string;
    children: React.ReactNode;
}

export default function Section({title, children}: sectionprop): JSX.Element{
    return <section className="flex flex-col justify-center items-center border-2 rounded-2xl max-w-7xl p-1.5">
            <h1 className="font-bold">{title}</h1>
            {children}
          </section>
}