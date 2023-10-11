const ApiKey = '147ed690441ebcf171c54ca58cdd922d'


let lat = ''
let lon = ''




const GetApi = () =>{
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`

  return fetch(apiUrl)
  .then(res => res.json()
  .then(response => {
    const {data} = response
    console.log(data)
  })
  )
}

export default GetApi