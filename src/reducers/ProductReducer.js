const initialState ={
  product:[]
}
const ProductReducer = (state = initialState, action) =>{
  
  switch(action.type){
    case 'SET_ADD':
      return {...state, product: action.payload.product}
    default:
      return state
  }

}

export default ProductReducer