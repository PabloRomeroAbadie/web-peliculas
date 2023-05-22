export const GuardarEnStorage = (clave, elemento) => {

    //conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    //comprobar si es un array
    if(Array.isArray(elementos)){
        //añadir elemento nuevo
        elementos.push(elemento);
    }else{
        //crear un array con el nuevo elemento
        elementos = [elemento];
    }

    //guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //devolver objeto guardado
    return elemento;

}