//Hans, Fernanda y Francisca
//#1 ES6 todo
//#2
const get_albumes = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
//#3
  try {
    const datos = await fetch(url);
    const albumes = await datos.json();
//#4    
    console.log(albumes.slice(0, 20));
  } catch (error) {
    console.log(error);
  }
};
//#5
const funcion_promesa = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('Información Enviada');
          }, 3000);
  });
}

//#6
const funcion_asincrona = async () => {
  get_albumes()
  const msg = await funcion_promesa();
  console.log(msg)
}
funcion_asincrona();