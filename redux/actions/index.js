import axios from "axios"
export const ALL_PRODUCTS = "ALL_PRODUCTS"
export const ONE_PRODUCT = "ONE_PRODUCT"
export const CLEAR_PRODUCT = "CLEAR_PRODUCT"
export const ADD_FAVOURITE = "ADD_FAVOURITE"
export const DELETE_FAVOURITE = "DELETE_FAVOURITE"

export const allProducts = () => { 
    return async function(dispatch){ 
        const response =  await axios.get(`https://6273c829345e1821b2216449.mockapi.io/api/v1/articles`) 
        const payload = await response.data
        dispatch({type: ALL_PRODUCTS , payload })
    }
}

export const oneProduct = (id) => { 
    return { 
        type: ONE_PRODUCT,
        payload: id
    }
}

export const clearProduct = () => { 
    return { 
        type: CLEAR_PRODUCT
    }
}
export const addFavourite = (payload) => {
    console.log(payload) 
    return { 
        type: ADD_FAVOURITE,
        payload: payload
    }
}
export const deleteFavourite = (payload) => { 
    return { 
        type: DELETE_FAVOURITE,
        payload: payload
    }
}