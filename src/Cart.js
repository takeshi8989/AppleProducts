import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import orderHistory from "./orderHistory";
import productList from "./ProductList";

const Cart = () => {
    const [cartItems, setCartItems] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [totalItems, setTotalItems] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const [change, setChange] = useState(0);
    const history = useHistory();

    const handlePurchase = () => {
        let orderItems = []
        for(let i = 0; i < cartItems.length; i++){
            orderItems.push(
                {
                    name: cartItems[i].name,
                    price: cartItems[i].price,
                    img: cartItems[i].img,
                    description: cartItems[i].description,
                    category: cartItems[i].category,
                    isFavorite: false,
                    quantity: cartItems[i].quantity,
                    id: cartItems[i].id
                }
            )
        }
        
        setChange(change + 1);
        let subTotal = parseInt(totalPrice.replace(",", ""));
        console.log(subTotal);
        let order = {total: subTotal, date: new Date().toDateString(), items: orderItems, numOfItems: totalItems, id: orderHistory.length + 1};
        orderHistory.push(order);

        history.push("/AppleProducts/result");
        setTimeout(() => {
            for(let i = 0; i < cartItems.length; i++){
                removeItem(cartItems[i]);
            }
        }, 10000);
    }

    const removeItem = (item) => {
        item.quantity = 0;
    }

    useEffect(() => {
        setCartItems(productList.filter(item => item.quantity > 0));
        setIsLoading(false);
        let total = 0;
        let totalP = 0;
        if(cartItems != null){
            for(let i = 0; i < cartItems.length; i++){
                total += parseInt(cartItems[i].quantity);
                totalP += (parseInt(cartItems[i].quantity) * parseInt(cartItems[i].price.replace(",", "")));
            }
            setTotalItems(total);
            let stringP = totalP.toString();
            if(totalP >= 1000000){
                let million = stringP.length - 6;
                setTotalPrice(stringP.substring(0, million)
                    + "," + stringP.substring(million, million + 3)
                    + "," + stringP.substring(million + 3, stringP.length));
            }
            else if(totalP >= 1000){
                let thousand = stringP.length - 3;
                setTotalPrice(stringP.substring(0, thousand) + "," + stringP.substring(thousand, stringP.length));
            }
            else{
                setTotalPrice(stringP);
            }
        }
    },[change])

    return (
        <div className="cart">
            <div className="left">
                <Link to="/AppleProducts"><button>Home</button></Link>
            </div>
            {isLoading && <div className="text-center">Loading...</div>}
            {!isLoading && cartItems.length == 0 && <div className="text-center">no items</div>}
            {!isLoading && cartItems.length > 0 &&
                <div className="cart-page">
                    <div className="cart-items">
                        {cartItems.map(item => <CartItem key={item.id} item={item} change={change} setChange={setChange} />)}
                    </div>
                    <div className="purchase">
                        <p>subTotal({totalItems} Items):</p>
                        <p>{totalPrice}円</p>
                        <button onClick={handlePurchase}>Purchase</button>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default Cart;