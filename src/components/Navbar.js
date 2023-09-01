import React from "react";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  let result = useSelector(state=>state.cardRed);
  console.log("Result __________ ", result);
  


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-COMMERCE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav fw-bold me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/products">
                  PRODUCTS
                </Link>
              </li>              
              
            </ul>
            <form className="d-flex">            
              <Link to="/login" className="btn btn-info" type="submit">
                LOGIN
              </Link>
              <Link to="/register" className="btn btn-dark" type="submit">
                REGISTER
              </Link>
              <Link to="/cart" className="btn btn-warning" type="submit">                
                <Badge badgeContent={result.length} color="primary">                    
                    <ShoppingCartIcon />
                </Badge>

              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
