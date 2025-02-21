import { useRef } from "react"

export const Busqueda = ({setResultado,setError}) =>{
    const inputRef = useRef ()
    const getPaises = async (pais) =>{
        let response= await fetch ("https://restcountries.com/v3.1/name/"+pais)
        let data = await response.json()
        console.log (data)
        if (data.status == 404){
            setError(true)
            return
        }setError(false)
        setResultado(data)
    }
   
    return <>
    <h1>Busqueda de Paises</h1>
    <input ref={inputRef} onChange = {()=>{
       if (inputRef.current.value !=="") {
        getPaises(inputRef.current.value 
        )}}} type="text" />
    </>
}