import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import orderHistory from "./orderHistory";

const History = () => {
    const [orders, setOrders] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let result = orderHistory.sort(function(a, b) {
            return (a.date < b.date) ? 1 : -1;
        });
        setOrders(result);
        setIsLoading(false);
        console.log(orderHistory);
    },[])

    return (
        <div className="history">
            {isLoading && <div>searching your order history...</div>}
            {!isLoading && orders.length == 0 && <div>There is no order histories</div>}
            {!isLoading && orders.length > 0 &&
                orders.map(order => (
                    <div key={order.id}>
                        <div className="order">
                            <div>
                                <p>{order.date}</p>
                                <p>{order.total}円</p>
                            </div>
                            <div>
                                <p>Total Items: {order.numOfItems}</p>
                                <Link to={{ pathname: `/order-detail${order.id}`, state: { order: {order}} }}><p>See Details</p></Link>
                            </div>
                        </div>
                    </div>
                ))
                
            }
        </div>
    );
}
 
export default History;