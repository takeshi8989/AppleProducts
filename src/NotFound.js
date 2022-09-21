import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <p>pages are not found</p>
            <Link to="/">Back Home</Link>
        </div>
    );
}
 
export default NotFound;