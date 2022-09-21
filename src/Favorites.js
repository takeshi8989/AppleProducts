import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import productList from "./ProductList";

const Favorites = () => {
    const [favoriteItems, setFavoriteItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [changeFav, setChangeFav] = useState(0);
    const history = useHistory();

    const removeFavorite = (item) => {
        item.isFavorite = false;
        setChangeFav(changeFav + 1);
    }

    const buyNow = (item) => {
        item.quantity += 1;
        history.push("/cart");
    }

    useEffect(() => {
        setFavoriteItem(productList.filter(item => item.isFavorite));
        setIsLoading(false);
    },[changeFav])

    return (
        <div className="favorites">
            <div className="left">
                <Link to="/AppleProducts"><button>Home</button></Link>
            </div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && favoriteItems.length == 0 && <div>No favorite items</div>}
            {!isLoading && favoriteItems.length > 0 &&
                <div>
                    {favoriteItems.map(item => 
                        <div key={item.id}>
                            <div className="favorite-item">
                                <div>
                                <Link to={{ pathname: `/items${item.id}`, state: { item: {item}} }}
                                    className="decoration-none">
                                    <img src={item.img} alt={item.name} />
                                </Link>
                                </div>
                                
                                <div className="purchase-detail">
                                    <div className="purchase-name">
                                        {item.name}
                                    </div>
                                    <div className="purchase-price">
                                        {item.price}円
                                        <button onClick={() => removeFavorite(item)}>Remove</button>
                                        <button onClick={() => buyNow(item)}>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}
 
export default Favorites;