const persona={
    nombre:"Alexis",
    edad:23,
    clave:"abc123",
    rango:"Soldado"
  }
  
  // console.log(persona.nombre)
  // console.log(persona.edad)
  // console.log(persona.clave)
  
  const {nombre,edad,clave}= persona;
  console.log(nombre,edad,clave);
  
  //FUNCION
  
  const usContext=({clave, nombre,edad,rango="Comandante"})=>{
    //console.log(nombre,edad,rango)
    return {
      nombreClave: clave,
      anios:edad,
      latlng:{
        lat:21321,
        lng:23459
      }
    }
  }
  
  const {nombreClave, anios, latlng:{lat, lng}}= usContext(persona);
  //const {lat, lng}= latlng;
  
  console.log(nombreClave,anios);
  console.log(lat, lng);