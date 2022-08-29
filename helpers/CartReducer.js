export default (state, action) =>{
    switch(action.type){
        case 'add' : 
        return{
            ...state,
           
            product: [action.payload, ...state.product],
            
           
        } 

        case 'increseQty' : 
            return{
                ...state,
            
               product: state.product.filter((c)=> 
                c.productID == action.id ? c.qty=c.qty+1 : c.qty
               
                
               ),
              
               
            }

            case 'decreseQty' :
                return{
                    ...state,
                    
                    product: state.product.filter((c)=> 
                        c.productID == action.id ? c.qty = c.qty-1 : c.qty
                    ),
                   
                }

            case 'removeCart' :
                return{
                    ...state,
                   
                    product: state.product.filter((c)=> 
                        c.productID != action.id 
                    ),
                    
                }
       
        default: return state
        
      throw new Error();
    }
}