//const getImagePromesa = () => new Promise((resolve) => resolve("https://askansaks.com"));
//getImagePromesa().then(console.log);

const getImagen = async () => {
  try {

    const apiKey = "28Hz7cqw2llV54Jkm4FjngT7EvyIXFTg";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  } catch (error) {
      console.log(error);
  }
};

getImagen();
