import { JSX } from "react";

interface sectionprop{
    children: React.ReactNode;
}

export default function Section({children}: sectionprop): JSX.Element{
    return <section className="flex flex-col justify-center items-center max-w-7xl p-1.5">
            {children}
          </section>
}