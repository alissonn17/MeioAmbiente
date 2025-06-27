import { JSX } from "react"

interface mainprop{
    children: React.ReactNode
}

export default function Main({children}: mainprop): JSX.Element{
    return <main className="flex flex-col items-center">
        {children}
    </main>
}