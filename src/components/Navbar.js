import './navbar.css';
function Navbar(){
    return(
    <>
    <div className='container-fluid'>
     <div className="nav-bar row border-btm  bt-3 ">
     <nav className="navbar srchBar col-9">
      <div className="container-fluid">
        <form className="d-flex " role="search">
        <button className="btn srchBtn  border-dark " type="submit" onClick={(e) =>{
          e.preventDefault();
        }}>Search</button>
          <input className="form-control me-2 w-100 " type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
    <div className='col-3 d-flex justify-content-center '>
    <span className=''>Deliver to<br></br> Unspecified</span>
        <span className=''>Wishlist</span>
        <span className=''>Cart</span>

 </div>

     </div>

     </div>
     <hr className='hr'>
     </hr>
    </>
       
    );
}
export default Navbar;