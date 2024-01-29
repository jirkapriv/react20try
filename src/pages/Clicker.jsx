import { useState, useEffect } from "react"

export default function Clicker(){
    const [cookies, setCookies] = useState(0)
    const incrCookies = ()=>{
        setCookies(cookies + 1)
    }
    useEffect(()=>{
        document.title = cookies
    }, [cookies])
    // zmeni se kdyz se zmeni promena kdyz v zavorce [] nic neni je to na load

    return(
        <>
        <button onClick={incrCookies}>
            Click me
        </button>
        <p>Pocet kliknuti: {cookies} </p>
        </>
    )
}