
import {Link} from 'react-router-dom';

const ItemCard = ({item, change, setChange}) => {

    const handleFavorite = (item) =>{
        setChange(change + 1);
        item.isFavorite = true;
    }

    const deleteFavorite = (item) => {
        setChange(change - 1);
        item.isFavorite = false;
    }

    const handleCart = (e, item) => {
        e.target.classList.add("blue");
        setTimeout(() => {
            e.target.classList.remove("blue");
        }, 300);

        item.quantity = parseInt(item.quantity) + 1;
    }


    return (
        <div className='item-card'>
            <Link to={`/items${item.id}`} className="decoration-none">
                <img src={item.img} alt={item.name} />
            </Link>
            <Link to={`/items${item.id}`} className="decoration-none">
                <h4>{item.name}</h4>
            </Link>
            <p>{item.price} 円～</p>
            <div className="actions">
                {!item.isFavorite && 
                    <p onClick={() => handleFavorite(item)}><i className="fa-solid fa-star fa-lg"></i></p>
                }
                {item.isFavorite && 
                    <p onClick={() => deleteFavorite(item)}><i className="fa-solid fa-star fa-lg yellow"></i></p>
                }
                <p onClick={(e) => handleCart(e, item)}><i className="fa-solid fa-cart-plus fa-lg"></i></p>
            </div>
        </div>
    );
}
 
export default ItemCard;