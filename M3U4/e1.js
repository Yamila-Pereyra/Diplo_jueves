//PRIMER MODO

const alumnos = [
  { nombre: 'Juan Gomez', nota: 7 },
  { nombre: 'Pedro Rodriguez', nota: 4 },
  { nombre: 'Roxana García', nota: 8 },
  { nombre: 'Luciano Lopez', nota: 5 },
  { nombre: 'Fernanda Gimenez', nota: 6 },
  { nombre: 'Florencia Martinez', nota: 10 },
  { nombre: 'Raul Sanchez', nota: 7 },
  { nombre: 'Sandra Figueroa', nota: 8 }
];

const aprobados = alumnos.filter(alumno => alumno.nota >= 7);

console.log("Alumnos aprobados:");
console.log(aprobados);
 

//SEGUNDO MODO

const alumnos = [
  { nombre: 'Juan Gomez', nota: 7 },
  { nombre: 'Pedro Rodriguez', nota: 4 },
  { nombre: 'Roxana García', nota: 8 },
  { nombre: 'Luciano Lopez', nota: 5 },
  { nombre: 'Fernanda Gimenez', nota: 6 },
  { nombre: 'Florencia Martinez', nota: 10 },
  { nombre: 'Raul Sanchez', nota: 7 },
  { nombre: 'Sandra Figueroa', nota: 8 }
];



const aprobados = alumnos.filter(alumno => alumno.nota >= 7);




const nombresAprobados = aprobados.map(alumno => alumno.nombre);

console.log("Nombres de los alumnos aprobados:");
console.log(nombresAprobados);



