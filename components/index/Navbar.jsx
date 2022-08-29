import React from 'react'
import Link from 'next/link'
import CategoryList from './CategoryList'
import Carousel from './Carousel'
const Navbar = (props) => {
    
  return (
    <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
           <CategoryList list={props.cats}/>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <Link href="/"><a className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a></Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link href="/" ><a className="nav-item nav-link active">Home</a></Link>
                           <Link href="/store"><a className="nav-item nav-link">Shop</a></Link>
                          <Link href="/cart"><a className="nav-item nav-link">Shopping Cart</a></Link>
                           
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <Link href="/login"><a className="nav-item nav-link">Login</a></Link>
                            <Link href="/signup"><a className="nav-item nav-link">Register</a></Link>
                            
                        </div>
                    </div>
                </nav>
                <Carousel />
            </div>
        </div>
    </div>
  )
}

export default Navbar