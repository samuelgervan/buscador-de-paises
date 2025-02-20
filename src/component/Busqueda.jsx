import { useRef } from "react"

export const Busqueda = ({setResultado}) =>{
    const inputRef = useRef ()
    const getPaises = async (pais) =>{
        let response= await fetch ("https://restcountries.com/v3.1/name/"+pais)
        let data = await response.json()
        setResultado(data)
    }
   
    return <>
    <h1>Busqueda de Paises</h1>
    <input ref={inputRef} onChange = {()=>{getPaises(inputRef.current.value)}} type="text" />
    </>
}