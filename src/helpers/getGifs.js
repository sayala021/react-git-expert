export const getGifs= async(category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=rmTopiF7oLq8GL5GSLEBJsZ5OfcNKhYu&q=${category}&limit=10`;
    const resp= await fetch(url);
    const { data }= await resp.json();
    const gifs= data.map( imp=>({
      id: imp.id,
      title: imp.title,
      url: imp.images.downsized_medium.url
    }));
    
    return gifs;
}