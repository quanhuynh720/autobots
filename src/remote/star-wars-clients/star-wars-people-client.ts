import { swClient } from "."



export const getPageStarWarsPeople = async (page:number) => {
    let response = await swClient.get(`/people/?page=${page}`)
    return response.data
}


//an example of posting using axios
//     let obj = {}
//     swClient.post('/login', obj)