import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import productList from "./ProductList";

const OrderDetails = () => {
    const data = useLocation();
    const order = data.state.order.order;
    const [totalPrice, setTotalPrice] = useState(order.total.toString());
    const history = useHistory();

    const buyAgain = (item) => {
        getActualItem(item).quantity += 1;
        history.push("/cart");
    }

    const getActualItem = (item) => {
        return productList.filter(product => product.id == item.id)[0];
    }

    useEffect(() => {
        if(order.total >= 1000000){
            setTotalPrice(totalPrice.substring(0, totalPrice.length - 6)
                + "," + totalPrice.substring(totalPrice.length - 6, totalPrice.length - 3)
                + "," + totalPrice.substring(totalPrice.length - 3, totalPrice.length));
        }
        else if(order.total >= 1000){
            setTotalPrice(totalPrice.substring(0, totalPrice.length - 3) + "," + totalPrice.substring(totalPrice.length - 3, totalPrice.length));
        }
        else{
            setTotalPrice(totalPrice);
        }
    },[])
    
    

    return (
        <div className="order-details">
            <p>{order.date}</p>
            <p>{totalPrice}円</p>
            {order.items.map(item => 
                <div className="ordered-item" key={item.id}>
                    <div>
                    <Link to={`/items${item.id}`}
                        className="decoration-none">
                        <img src={item.img} alt={item.name} />
                    </Link>
                    </div>
                    
                    <div className="purchase-detail">
                        <div className="purchase-name">
                            <p>{item.name}</p>
                            <p>You bought {item.quantity} of {item.quantity > 1 ? "these items": "this item"}</p>
                        </div>
                        <div className="purchase-price">
                            <p>{item.price}円</p>
                            <button onClick={() => buyAgain(item)}>Buy Again</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default OrderDetails;