import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import productList from "./ProductList";

const ItemDetails = () => {
    const paramId = useParams().id;
    const [item, setItem] = useState();
    const [isSetting, setIsSetting] = useState(true);
    const [favoriteItem, setFavoriteItem] = useState(null);
    
    const handleFavorite = (item) =>{
        item.isFavorite = true;
        setFavoriteItem(true);
    }

    const deleteFavorite = (item) => {
        setFavoriteItem(false);
        item.isFavorite = false;
    }

    const handleCart = (item) => {
        item.quantity += 1;
    }

    useEffect(() => {
        setItem(productList.filter(product => product.id == paramId)[0]);
        setIsSetting(false);
    },[]);

    return (
        <div className="">
            {!isSetting && 
                <div className="item-details">
                    <div className="left">
                        <Link to="/"><button>Home</button></Link>
                    </div>
                    <img src={item.img} />
                    <h2>{item.name}</h2>
                    <p>{item.price} 円～</p>
                    <div>
                        <button className="btn" onClick={() => handleCart(item)}>Add to Cart</button>
                        
                        {!favoriteItem && <button className="" onClick={() => handleFavorite(item)}>Add to Favorites</button>}
                        {favoriteItem && <button onClick={() => deleteFavorite(item)}>Remove from Favorites</button>}
                    </div>
                    <p className="description">{item.description}</p>
                </div>
            }
            
        </div>
    );
}
 
export default ItemDetails;