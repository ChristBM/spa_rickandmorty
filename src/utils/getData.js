const URL_base = 'https://rickandmortyapi.com/api/'
/* Esta API tiene tres objetos principales: character, location y episode. */
/* En este caso voy a trabajar con character solamente. */
const API_character = `${URL_base}character/`

const getData = async (id) => {
    const apiURL = id ? `${API_character}${id}` : API_character
    try{
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    }
    catch(err){
        console.log('Fetch Error:', err)
    }
}

export default getData