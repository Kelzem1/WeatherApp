const apiKey = 'NVk5bZWAeLAPHcp2xvmWjuoZDDPpvvBD&q'

export default function GetGiphy () ={
    const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    return fetch(api_url)
    .then(res => res.json())
    .then(response => {
        const {data} =response
        const gifs = data.map(image => {
            const {images, title, id} = image
            const { url } = image.images.fixed_height
            return {title, id, url}
        })
        return gifs
    })
}