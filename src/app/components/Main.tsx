import { JSX } from "react";

// Main prop.
interface mainprop{
    children: React.ReactNode;
}

// Main usada na Landing Page.
export default function Main({children}: mainprop): JSX.Element{

    return <main className="flex flex-col items-center">
        {children}
    </main>
}