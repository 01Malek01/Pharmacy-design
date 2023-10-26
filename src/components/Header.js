import './Header.css'
import Navbar from "./Navbar";
function Header(){
    return(
        <>
        <div className='row'>
        <div className="header">
            <div className='container-fluid'>
            <div className='head mb-3 '>
                <div className='row d-flex align-items-center'>
                    <div className='col-9 logo'>NOT Dose</div>
                    <div className='col-3 options'>
                        <span id="loginBtn">Login</span>
                        <span id="langBtn">العربية</span>
                    </div>

                </div>
            </div>
            <hr className='hr'></hr>

            <Navbar />
        </div>
        </div>
        </div>
</>
    );
}
export default Header;