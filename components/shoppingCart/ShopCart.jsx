import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AppContext } from '../../helpers/AppState'
import formatter from '../../helpers/format'

const ShopCart = () => {
   const { state, dispatch } = useContext(AppContext)
  
   const [items, setItems] = useState(state.cart)
   const [total, setTotal] = useState(state.cart.reduce((acc, curr)=> acc + curr.productPrice*curr.qty, 0))

   useEffect(()=>{
    setItems(state.cart)
    setTotal(state.cart.reduce((acc, curr)=> acc + curr.productPrice*curr.qty, 0))
   },[state])
    

 
  return (
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                { items.length == 0 ? <div> No items found </div> :  <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                       
                    {
                       
                        items.map(e=>{
                           
                           
                            return(
                                <tr>
                                <td className="align-middle"><img src={e.productImage} alt="" style={{ width: "50px" }} />{e.productName}</td>
                                <td className="align-middle">{formatter.format(e.productPrice)}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                        <div className="input-group-btn">
                                            <button onClick={()=> dispatch({ type: 'decreseQty', id: e.productID})} className="btn btn-sm btn-primary btn-minus" >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm bg-secondary text-center"  placeholder={e.qty} />
                                        <div className="input-group-btn">
                                            <button onClick={()=> dispatch({ type: 'increseQty', id: e.productID})} className="btn btn-sm btn-primary btn-plus">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">{formatter.format(e.productPrice*e.qty)}</td>
                                <td className="align-middle"><button onClick={()=> dispatch({ type: 'removeCart', id: e.productID})} className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                            </tr>
                            )
                        })
                    }
                         
                          
                        
                    </tbody>
                </table>
                
                }
           
            </div>
            <div className="col-lg-4">
            <form className="mb-5">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                        <div className="input-group-append">
                            <button className="btn btn-primary">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                          
                                    <h6 className="font-weight-medium">{formatter.format(total)}</h6>
                               
                            
                        </div>
                       {/* <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping</h6>
                            <h6 className="font-weight-medium">$10</h6>
                         </div> */}
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="font-weight-bold">{formatter.format(total)}</h5>
                        </div>
                        <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopCart
