export const MostrarResultado= ({resultado})=>{
    return<div className="row">
    {resultado.map((element, index)=>{
        console.log (element.flags.svg)
        return <div className="col-4" key={index}>
            <h3>Nombre del Pais{element.name.common}</h3>
            <p>Poblacion: {element.population}</p>
            <p></p>
            <img src={element.flags.svg} height={30} alt="" />
        </div>

    })}
    </div>

}