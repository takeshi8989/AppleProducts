import { useState } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [seeInfo, setSeeInfo] = useState(false);

    return (
        <div className="navbar">
            <div className="title">
                <Link to="/AppleProducts" className='decoration-none'><h1>Apple's Products</h1></Link>
            </div>
            <div className="icons">
                <Link to="/cart"><p><i className="fa-solid fa-cart-shopping fa-xl"></i></p></Link>
                <p onClick={() => setSeeInfo(!seeInfo)}><i className="fa-solid fa-user fa-xl"></i></p>
                {seeInfo && 
                    <div className='userInfo'>
                        <p><Link to="/favorites" onClick={() => setSeeInfo(false)}>Favorite Items</Link></p>
                        <p><Link to="/cart" onClick={() => setSeeInfo(false)}>Your Cart</Link></p>
                        <p><Link to="/history" onClick={() => setSeeInfo(false)}>Order History</Link></p>
                    </div>
                }
                
            </div>
        </div>
    );
}
 
export default Navbar;