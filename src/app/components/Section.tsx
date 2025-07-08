import { JSX } from "react";

// Section props.
interface sectionprop{
    children: React.ReactNode;
}

// Section usada na Landing Page pelos GETs.
export default function Section({children}: sectionprop): JSX.Element{
    return <section className="flex flex-col justify-center items-center max-w-7xl p-1.5">
            {children}
          </section>
}