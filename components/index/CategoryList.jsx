import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const CategoryList = (props) => {

const [ list, setList ] = useState(props.list)


  return (
      <div className="col-lg-3 d-none d-lg-block">
          <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav className="collapse show navbar navbar-vertical navbar-light align-items-start py-2 border border-top-0 border-bottom-0" id="navbar-vertical">
              <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
             
                 {
                    list == 0 ? <div>
                        <a href="" className="nav-item nav-link skeleton  py-4 skeleton-text"></a>
                        <a href="" className="nav-item nav-link skeleton py-4 skeleton-text"></a>
                        <a href="" className="nav-item nav-link skeleton py-4 skeleton-text"></a>
                        <a href="" className="nav-item nav-link skeleton py-4 skeleton-text"></a>
                        <a href="" className="nav-item nav-link skeleton py-4 skeleton-text"></a>
                        <a href="" className="nav-item nav-link skeleton py-4 skeleton-text"></a>
                        <a href="" className="nav-item nav-link skeleton py-4 skeleton-text"></a>
                      
                       
                        
                        </div> :
                    list.map(e=>{
                        return(
                            <a href="" className="nav-item nav-link">{e.name}</a>
                        )
                    })
                 }
                
              </div>
          </nav>
      </div>
  )
}

export default CategoryList