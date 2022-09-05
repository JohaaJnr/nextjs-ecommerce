import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../helpers/AppState'
import formatter from '../../helpers/format'

const Shop = () => {
    
    const { state, dispatch } = useContext(AppContext)
    const [item, setItem] = useState(state.products)
   const [price, setPrice] = useState(0)
   
   useEffect(()=>{
    setItem(state.products)
   },[state.products])
    
   
    const addCart =(e)=>{
   
        e.preventDefault()
     
        const newProduct = {
         productID: e.target.attributes.getNamedItem('data-id').value,
         productName: e.target.attributes.getNamedItem('data-name').value,
         productImage: e.target.attributes.getNamedItem('data-img').value,
         productPrice: e.target.attributes.getNamedItem('data-price').value,
         qty: 1,
         size: 0
        }
         
         dispatch({
             type: 'add',
             payload: newProduct
         })
         
     }

   
   
  return (
    <div className="container-fluid pt-5">
    <div className="row px-xl-5">
       
        <div className="col-lg-3 col-md-12">
           
            <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
               <div>
                        <label className="radio px-2"> 
                           <input type="checkbox" onClick={()=> dispatch({ type: 'priceFilter', payload: 1000 })} value="1000"  /> <span>0-1000</span> 
                         </label> 
                         <label className="radio px-2"> 
                           <input type="checkbox" onClick={()=> dispatch({ type: 'priceFilter', payload: 3000 })} value="2000" /> <span >1000-2000</span> 
                         </label>
                         
                         <label className="radio px-2"> 
                           <input type="checkbox" onClick={()=> dispatch({ type: 'priceFilter', payload: 5000 })}  value="3000"  /> <span>2000-5000</span> 
                         </label>
                         <label className="radio px-2"> 
                           <input type="checkbox"onClick={()=> dispatch({ type: 'priceFilter', payload: 10000 })}  value="5000"  /> <span >5000-10000</span> 
                         </label>
                         
                </div>
            </div>
           
           
          
            <div className="mb-5">
                <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                <form>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" checked id="size-all"/>
                        <label className="custom-control-label" >All Size</label>
                        <span className="badge border font-weight-normal">1000</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="size-1"/>
                        <label className="custom-control-label" >XS</label>
                        <span className="badge border font-weight-normal">150</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="size-2"/>
                        <label className="custom-control-label" >S</label>
                        <span className="badge border font-weight-normal">295</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="size-3"/>
                        <label className="custom-control-label" >M</label>
                        <span className="badge border font-weight-normal">246</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="size-4"/>
                        <label className="custom-control-label" >L</label>
                        <span className="badge border font-weight-normal">145</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                        <input type="checkbox" className="custom-control-input" id="size-5" />
                        <label className="custom-control-label" >XL</label>
                        <span className="badge border font-weight-normal">168</span>
                    </div>
                </form>
            </div>
            
        </div>
        


       
        <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
                <div className="col-12 pb-1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search by name"/>
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className="dropdown ml-4">
                            <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        Sort by
                                    </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                <a className="dropdown-item" href="#">Latest</a>
                                <a className="dropdown-item" href="#">Popularity</a>
                                <a className="dropdown-item" href="#">Best Rating</a>
                            </div>
                        </div>
                    </div>
                </div>
            {
                item.map(e=>{
                    return(
                        <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={e.images[0].src} alt=""/>
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">{e.name}</h6>
                            <div className="d-flex justify-content-center">
                                <h6>{formatter.format(e.sale_price)}</h6><h6 className="text-muted ml-2"><del>{formatter.format(e.regular_price)}</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href={`/details/${e.id}`} className="btn btn-sm text-dark p-1"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                            {
                                        state.cart.some((p)=> p.productID == e.id) ? 
                                        <button onClick={()=> dispatch({ type: 'removeCart', id: e.id })} data-id={e.id} className="btn btn-sm btn-danger text-white p-1"><i className="fas fa-shopping-cart text-white mr-1"></i>Remove from Cart</button>
                                        : <button onClick={addCart} data-id={e.id} data-name={e.name} data-price={e.sale_price} data-img={e.images[0].src} className="btn btn-sm text-dark p-1"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                            }
                        </div>
                    </div>
                </div>
                    )
                })
            }
                
                
                <div className="col-12 pb-1">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center mb-3">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                </div>
            </div>
        </div>
       
    </div>
</div>
  )
}

export default Shop