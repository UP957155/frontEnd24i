//Async function to fetch carousels

export const fetchCarousels = async() => {
    try {
        //Get method to get corresponding carousels data
        const response = await fetch('http://localhost:8080/carousels', {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json() //data to json format

        return data

    } catch (error) {
        return {
            error: 'CANNOT FETCH',
            message: 'Cannot fetch data with carousels'
        }
    }
}