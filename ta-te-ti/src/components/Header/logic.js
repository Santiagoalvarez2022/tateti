
//defino el title dependiendo de la url


export const defineTitle = (pathname) =>{
    let  title  = pathname === "/" 
        ? "Juegos"
        : pathname === "/tateti" 
            ? "Tateti"
            : pathname === "/fourinline" ? "Cuantro en Linea" : "Juegos" 
    return title  
}   

