export default (state, action) =>{
    switch(action.type){
        case 'add' : 
        return{
            ...state,
           
            cart: [action.payload, ...state.cart],
            
           
        } 

        case 'increseQty' : 
            return{
                ...state,
            
               cart: state.cart.filter((c)=> 
                c.productID == action.id ? c.qty=c.qty+1 : c.qty
               
                
               ),
              
               
            }

            case 'decreseQty' :
                return{
                    ...state,
                    
                    cart: state.cart.filter((c)=> 
                        c.productID == action.id ? c.qty = c.qty-1 : c.qty
                    ),
                   
                }

            case 'removeCart' :
                return{
                    ...state,
                   
                    cart: state.cart.filter((c)=> 
                        c.productID != action.id 
                    ),
                    
                }

            case 'priceFilter' :
                
                
                return{
                    ...state,
                    products: state.products.filter((c)=> c.sale_price < action.payload )
                }
                
       
        default: return state
        
      throw new Error();
    }
}