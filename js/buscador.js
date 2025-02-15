//definir selectores

const marca= document.querySelector('#marca');
const year= document.querySelector('#year');
const minimo= document.querySelector('#minimo');
const maximo= document.querySelector('#maximo');
const puertas= document.querySelector('#puertas');
const transmision= document.querySelector('#transmision');
const color= document.querySelector('#color');

// crear los años

const years= document.createElement('option');
const max= new Date().getFullYear();
const min = max-10;



for(let i = max; i > min; i--){
    //console.log(i);

    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option)

}

//generar un objeto
//obtener los datos para la busqueda

const datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''

}


//crear los eventos

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);
})

marca.addEventListener('input', e=>{
    datosBusqueda.marca = e.target.value;
    //console.log(datosBusqueda.marca)
     filtrarAuto();
})

year.addEventListener('input', e=>{
    datosBusqueda.year= Number(e.target.value);
    //console.log(datosBusqueda.year)
    filtrarAuto();
})

minimo.addEventListener('input', e=>{
    datosBusqueda.minimo= Number(e.target.value);
    //console.log(datosBusqueda.minimo)
    filtrarAuto();
})

maximo.addEventListener('input', e=>{
    datosBusqueda.maximo= Number(e.target.value);
    //console.log(datosBusqueda.maximo)
    filtrarAuto();
})

puertas.addEventListener('input', e=>{
    datosBusqueda.puertas= Number(e.target.value);
    //console.log(datosBusqueda.puertas)
    filtrarAuto();
})

transmision.addEventListener('input', e=>{
    datosBusqueda.transmision=e.target.value;
    //console.log(datosBusqueda.transmision)
    filtrarAuto();
})

color.addEventListener('input', e=>{
    datosBusqueda.color=e.target.value;
    //console.log(datosBusqueda.color)
    filtrarAuto();
})


//funciones

function mostrarAutos(autos){

   limpiarHTML();

    const contenedor=document.querySelector('#resultado');

    //construir el html para colocar el listado de autos

    autos.forEach(auto =>{
        const autoHTML= document.createElement('p');
        autoHTML.innerHTML=`
        <p>${auto.marca} -${auto.modelo} - ${auto.year} - ${auto.puertas} puertas - transmision: ${auto.transmision} - precio: ${auto.precio}- color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    });
}

function limpiarHTML(){
    const contenedor = document.querySelector('#resultado');

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)

    }
}

function filtrarAuto(){

    const resultado = autos.filter(filtrarMarca).filter(filtraryear).filter(filtrarMaximo).filter(filtrarMinimo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);
    
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}



function noResultado(){

    limpiarHTML();

     const noResultado = document.createElement('div');
     noResultado.classList.add('alerta','error')
     noResultado.appendChild(document.createTextNode('no hay resultados para su busqueda'))

     document.querySelector('#resultado').appendChild(noResultado);
}

//filtros


function filtrarMarca(auto){
    
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtraryear(auto){
    
    if(datosBusqueda.year){
        return auto.year=== datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto){
    
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    
    if(datosBusqueda.maximo){
        return auto.precio = datosBusqueda.maximo;
    }
    return auto;
}


function filtrarPuertas(auto){
    
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){
    
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}
