import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Result = () => {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSuccess(true);
        }, 5000);
    },[])

    return (
        <div className="result">
            {success && 
                <div>
                    <p>Thank you for purchasing our items!</p>
                    <p><Link to="/history">check your order history</Link></p>
                    <Link to="/AppleProducts"><button className="">back Home</button></Link>
                </div>
            }
            {!success && <div>Processing...</div>}
        </div>
    );
}
 
export default Result;