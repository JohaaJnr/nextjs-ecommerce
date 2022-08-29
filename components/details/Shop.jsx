
import React, { useContext, useEffect, useReducer, useState } from 'react'
import formatter from '../../helpers/format'
import { AppContext } from '../../helpers/AppState'

const Shop = (props) => {
   const { dispatch } = useContext(AppContext)
    const [product, setProduct] = useState(props.product)
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState(0)
    
   
 
    function addCart(e){
        e.preventDefault()
        const newProduct = {
            productID: e.currentTarget.attributes.getNamedItem('data-id').value,
            productName: e.currentTarget.attributes.getNamedItem('data-name').value,
            productImage: e.currentTarget.attributes.getNamedItem('data-img').value,
            productPrice: e.currentTarget.attributes.getNamedItem('data-price').value,
            qty: qty,
            size: size
           }
        dispatch({
            type: 'add',
            payload: newProduct
        })

    }


    function handleChange(e){
        
        setSize(e.target.value)
       
    }

   

  return (
    <div class="container-fluid py-5">
    <div class="row px-xl-5">
        <div class="col-lg-5 pb-5">
            <div id="product-carousel" class="carousel slide skeleton skeleton__body" data-ride="carousel">
                <div class="carousel-inner border">
                    <div class="carousel-item active">
                       {
                        product == 0 ?  <img class="w-100 h-100" alt={msg} /> :  <img class="w-100 h-100" src={product.images[0].src} alt="Image" />
                       }
                    </div>
                    
                </div>
               
            </div>
        </div>

        <div class="col-lg-7 pb-5">
            {
                product == 0 ? <h3 class="font-weight-semi-bold skeleton skeleton-text"></h3> : <h3 class="font-weight-semi-bold">{product.name}</h3>
            }
            
            <div class="d-flex mb-3">
                <div class="text-primary mr-2">
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star-half-alt"></small>
                    <small class="far fa-star"></small>
                </div>
                <small class="pt-1">(50 Reviews)</small>
            </div>
            {
                product == 0 ? <h3 class="font-weight-semi-bold mb-4 skeleton skeleton-text"></h3> : <h3 class="font-weight-semi-bold mb-4">{formatter.format(product.sale_price)}</h3>
            }
            {
                product == 0 ? <p class="mb-4 skeleton skeleton-text"></p> : <p class="mb-4">{product.short_description}</p>
            }
            <div class="d-flex mb-3">
                <p class="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
               
                   <div>
                   <label className="radio px-2"> 
                           <input type="radio" onChange={handleChange} value="S" checked={size === "S"}  /> <span>S</span> 
                         </label> 
                         <label className="radio px-2"> 
                           <input type="radio" onChange={handleChange} value="M" checked={size === "M"} /> <span >M</span> 
                         </label>
                         
                         <label className="radio px-2"> 
                           <input type="radio" onChange={handleChange} value="L" checked={size === "L"} /> <span>L</span> 
                         </label>
                         <label className="radio px-2"> 
                           <input type="radio" onChange={handleChange} value="XL" checked={size === "XL"} /> <span >XL</span> 
                         </label>
                         <label className="radio px-2"> 
                           <input type="radio" onChange={handleChange} value="XXL" checked={size === "XXL"} /> <span >XXL</span> 
                         </label>
                         
                   </div>
                    
              
            </div>
            
            <div class="d-flex align-items-center mb-4 pt-2">
                <div class="input-group quantity mr-3" style={{ width: "130px" }}>
                    <div class="input-group-btn">
                        <button class="btn btn-primary btn-minus" onClick={()=> setQty(qty-1) } >
                        <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control bg-secondary text-center" value={qty} />
                    <div class="input-group-btn">
                        <button class="btn btn-primary btn-plus" onClick={()=> setQty(qty+1) }>
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="btn btn-primary px-3" data-id={product.id} data-img={product.images[0].src} data-name={product.name} data-price={product.sale_price} onClick={addCart}><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
            </div>
            <div class="d-flex pt-2">
                <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                <div class="d-inline-flex">
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="row px-xl-5">
        <div class="col">
            <div class="nav nav-tabs justify-content-center border-secondary mb-4">
                <a class="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
            </div>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="tab-pane-1">
                    <h4 class="mb-3">Product Description</h4>
                    {
                        product == 0 ? <p class="skeleton skeleton-text"></p> : <p>{product.short_description}</p>
                    }
                </div>
                <div class="tab-pane fade" id="tab-pane-2">
                    <h4 class="mb-3">Additional Information</h4>
                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item px-0">
                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                </li>
                                <li class="list-group-item px-0">
                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                </li>
                                <li class="list-group-item px-0">
                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                </li>
                                <li class="list-group-item px-0">
                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                </li>
                              </ul> 
                        </div>
                        <div class="col-md-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item px-0">
                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                </li>
                                <li class="list-group-item px-0">
                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                </li>
                                <li class="list-group-item px-0">
                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                </li>
                                <li class="list-group-item px-0">
                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                </li>
                              </ul> 
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="tab-pane-3">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                            <div class="media mb-4">
                                <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style={{ width: "45px" }}/>
                                <div class="media-body">
                                    <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                    <div class="text-primary mb-2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h4 class="mb-4">Leave a review</h4>
                            <small>Your email address will not be published. Required fields are marked *</small>
                            <div class="d-flex my-3">
                                <p class="mb-0 mr-2">Your Rating * :</p>
                                <div class="text-primary">
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                            <form>
                                <div class="form-group">
                                    <label >Your Review *</label>
                                    <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                                </div>
                                <div class="form-group">
                                    <label >Your Name *</label>
                                    <input type="text" class="form-control" id="name"/>
                                </div>
                                <div class="form-group">
                                    <label>Your Email *</label>
                                    <input type="email" class="form-control" id="email"/>
                                </div>
                                <div class="form-group mb-0">
                                    <input type="submit" value="Leave Your Review" class="btn btn-primary px-3"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Shop