import { ALL_PRODUCTS , ONE_PRODUCT , CLEAR_PRODUCT , ADD_FAVOURITE , DELETE_FAVOURITE} from "../actions";

const initialState = {
  allProducts: [],
  favourites: [],
  oneProduct: {}
};

export default function rootReducer (state = initialState, { type, payload }) {
  switch (type) {

    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
    };
    case ONE_PRODUCT:
      let product = []
      state.allProducts.find((element)=> element.id === payload && product.push(element))

      return { 
        ...state,
        oneProduct: product[0]
      }
    case CLEAR_PRODUCT: 
    return { 
      ...state, 
      oneProduct: {}
    }
    case ADD_FAVOURITE: 
    return {
      ...state,
      favourites: state.favourites.concat(payload)
    }
    case DELETE_FAVOURITE:
      return { 
        ...state,
        favourites: state.favourites.filter((product)=> product.id !== payload.id)
      }
    default:
      return state;
  }
};
