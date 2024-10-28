
export const getApi2 = async(tag = 'Breaking Bad') => {
    const apiKey = 'a38PeaE9pQb1sHT3KvrZp8QHGToTOqgy';

    // const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=1`;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }&tag=${ tag }`;
    console.log(url);
    
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gif = {
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url
    }

    return gif;
}
