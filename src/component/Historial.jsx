import{useEffect, useState} from "react"

export const Historial =(resultado)=>{
    const [historial,setHistorial]= useState([])
    useEffect(()=>{
        if(resultado.lengh==1){setHistorial([...historial,resultado[0]])}
    },[resultado])
    return<>
    <h2>Historial</h2>
    <ul>{historial.map((element,index)=>{
        return <div key={index}>
            <h4>{element.name.common}</h4>

        </div>
        
    
    
    })}
    </ul>
    
    </>
}
