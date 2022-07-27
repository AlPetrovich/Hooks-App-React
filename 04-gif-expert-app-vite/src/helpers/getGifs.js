//xJwWuLZSJFQZKZEp9qyKsESJpAov1h71
    //api.giphy.com/v1/gifs/search?api_key=xJwWuLZSJFQZKZEp9qyKsESJpAov1h71&q=valorant
    


export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=xJwWuLZSJFQZKZEp9qyKsESJpAov1h71`
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map( img =>({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}