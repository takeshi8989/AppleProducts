import { useEffect, useState } from "react";

const CartItem = ({item, change, setChange}) => {
    const [num, setNum] = useState(parseInt(item.quantity));

    const changeQuantity = (e) => {
        setNum(e.target.value);
        setChange(change + 1);
        item.quantity = parseInt(e.target.value);
    }

    const handleDelete = () => {
        item.quantity = 0;
        setChange(change + 1);
    }

    useEffect(() => {
        setChange(change + 1);
    },[])

    return (
        <div className="cart-item">
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className="purchase-detail">
                <div className="purchase-name">
                    {item.name}
                </div>
                <div className="purchase-price">
                    {item.price}円
                    <input
                        type="number"
                        value={num}
                        min="1"
                        onChange={(e) => changeQuantity(e)}
                    />
                    <button onClick={handleDelete}>Remove</button>
                </div>
            </div>
        </div>
    );
}
 
export default CartItem;