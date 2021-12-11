async function useFetchDelete(endpoint) {
    const token = localStorage.getItem('token')

    const config = {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        }
    }

    const url = 'http://localhost:5000/api/'

    const api = url + endpoint + '/'

    const response = await fetch(api, config)

    return await response.ok
}

export default useFetchDelete