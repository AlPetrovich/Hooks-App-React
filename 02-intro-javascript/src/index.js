// const apiKey = "xJwWuLZSJFQZKZEp9qyKsESJpAov1h71";

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


const getImagen = async() =>{

    try{
        const apiKey = "xJwWuLZSJFQZKZEp9qyKsESJpAov1h71";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
       
        const img = document.createElement('img');
        img.src= url;
    
        document.body.appendChild(img);
        
    }catch(err){
        console.log(err);
    }


   

}
getImagen();