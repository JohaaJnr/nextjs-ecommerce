import formatter from '../../helpers/format'
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../helpers/AppState'

const LatestProducts = (props) => {

const [products, setProducts] = useState(props.p)


const { dispatch } = useContext(AppContext)

const addtoCart =(e)=>{
   
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
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {
               products == 0 ? <div className="col-lg-3 col-md-4 col-sm-12 pb-1">
               <div className="card product-item border-0 mb-4">
                   <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 skeleton">
                       <img className="img-fluid w-100 skeleton skeleton__body" style={{ width: '350px', height: '280px' }}  alt="" />
                   </div>
                   <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                       <h6 className="text-truncate mb-3 skeleton skeleton-text"></h6>
                       <div className="d-flex justify-content-center">
                           <h6><span className='woocommerce-Price-currencySymbol skeleton skeleton-text'></span></h6><h6 className="text-muted ml-2 skeleton skeleton-text"><del><span className='woocommerce-Price-currencySymbol'></span></del></h6>
                       </div>
                   </div>
                   <div className="card-footer d-flex justify-content-between bg-light border">
                    <a className="btn btn-sm text-dark p-0 skeleton skeleton-text"></a>
                       <a href="" className="btn btn-sm text-dark p-0 skeleton skeleton-text"></a>
                   </div>
               </div>
           </div> : products.map(e=>{
                    return(
                        <div className="col-lg-3 col-md-4 col-sm-12 pb-1">
                            <div className="card product-item border-0 mb-4">
                                
                                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <img className="img-fluid w-100"  style={{ width: '350px', height: '280px' }} src={e.images[0].src} alt="" />
                                </div>
                                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 className="text-truncate mb-3">{e.name}</h6>
                                    <div className="d-flex justify-content-center">
                                        <h6>{formatter.format(e.sale_price)}</h6><h6 className="text-muted ml-2"><del>{formatter.format(e.regular_price)}</del></h6>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-light border">
                                    <a className="btn btn-sm text-dark p-0" href={`/details/${e.id}`} ><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    <button onClick={addtoCart} data-id={e.id} data-name={e.name} data-price={e.sale_price} data-img={e.images[0].src} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                                </div>
                                
                            </div>
                        </div>
                    )
                })
            }
            
            
        </div>
    </div>
  )
}

export default LatestProducts