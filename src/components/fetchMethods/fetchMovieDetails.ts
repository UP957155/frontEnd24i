//Async function to fetch carousels

export const fetchMovieDetails = async(id: string | undefined) => {
    try {
        //Post method to send id and get corresponding data
        const response = await fetch('http://localhost:8080/assetDetails', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })

        const data = await response.json() //data to json format

        return data

    } catch (error) {
        return {
            error: 'CANNOT FETCH',
            message: 'Cannot fetch data with movie details'
        }
    }
}