import { TituloPrincipal } from "@/componets/tituloPrincipal";

const titulo2='otro ejemplo'

import {ListaArticulos} from "@/componets/listaEjemplos";

  const articulos = [
    { id: 1, nombre: "Lapiceras", precio: 1200 },
    { id: 2, nombre: "Cuadernos rayados", precio: 900 },
    { id: 3, nombre: "Gomas", precio: 500 },
    { id: 4, nombre: "Plasticolas", precio: 700 },
    { id: 5, nombre: "Fibras", precio: 800 },
    { id: 6, nombre: "Crayones", precio: 1000 },
  ];


import {NovedadItems} from "@/componets/novedadItems";


const contenidoNovedades ={
  id:"1",
  titulo: "Aplicando componentes",
  subtitulo: "Ejemplo N4",
  autor: "Yamila",
  cuerpo: "Practicando la mayor cantidad de ejercicios posibles"
};


import {Contador} from "@/componets/contador";

import { BotonLuz } from "@/componets/apagar-encender";

export default
 function Home() {
  return (
    <div>
      <h2>Ejemplos Props</h2>
<TituloPrincipal titulo='Esto es un ejemplo'/>

<TituloPrincipal titulo={titulo2} />


<hr/>

<ListaArticulos items= {articulos}/>

<hr />

<NovedadItems
title={contenidoNovedades.titulo}
subtitle={contenidoNovedades.subtitulo}
author={contenidoNovedades.autor}
body={contenidoNovedades.cuerpo}


/>
<hr/>
<h2>Estados</h2>
<Contador/>
<hr></hr>
<BotonLuz/>
   </div>
   
 


  );
}
