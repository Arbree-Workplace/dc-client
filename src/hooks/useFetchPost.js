async function useFetchPost(endpoint, payload) {
    const token = localStorage.getItem('token')

    const config = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }

    token ? config.headers.Authorization = token : null

    const url = 'https://dc-express-api.herokuapp.com/api/'

    const api = url + endpoint + '/'

    const response = await fetch(api, config)

    return await response.json()
}

export default useFetchPost