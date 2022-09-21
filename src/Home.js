import { useEffect, useState } from 'react';
import Category from './Category';
import productList from './ProductList';

const Home = () => {
    const [categories, setCategories] = useState(["Mac", "iPhone", "iPad", "Apple Watch"]);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [change, setChange] = useState(0);
    const [sort, setSort] = useState("-");
    const [filter, setFilter] = useState("-");

    const handleSort = (e) => {
        let sortType = e.target.value;
        setSort(sortType);
        let newItems;
        if(sortType == "price(high)"){
            newItems = items.sort(function(a, b) {
                return (intPrice(a) < intPrice(b)) ? 1 : -1;
            });
        }
        else if(sortType == "price(low)"){
            newItems = items.sort(function(a, b) {
                return (intPrice(a) < intPrice(b)) ? -1 : 1;
            });
        }
        else{
            newItems = items.sort(function(a, b) {
                return (a.id < b.id) ? -1 : 1;
            });
        }
        setItems(newItems);
    }

    const handleFilter = (e) => {
        let filterType = e.target.value;
        setFilter(filterType);
    }

    const intPrice = (item) => {
        return parseInt(item.price.replace(",", ""));
    }

    useEffect(() => {
        setItems(productList);
    },[change]);

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {!isLoading && 
                <div className='sort-filter'>
                    <p>sort</p>
                    <select onChange={(e) => handleSort(e)} value={sort}>
                        <option value="-">-</option>
                        <option value="price(high)">price(high)</option>
                        <option value="price(low)">price(low)</option>
                    </select>
                    <p>filter</p>
                    <select onChange={(e) => handleFilter(e)} value={filter}>
                        <option value="-">-</option>
                        <option value="Mac">Mac</option>
                        <option value="iPhone">iPhone</option>
                        <option value="iPad">iPad</option>
                        <option value="Apple Watch">Apple Watch</option>
                        <option value="favorites">favorites</option>
                    </select>
                </div>
            }
            {!isLoading && categories.map(category => (
                <Category
                    category={category}
                    // favorites
                    items={items.filter(item => item.category == category && (filter == "-" || item.category == filter || (filter == "favorites" && item.isFavorite)))}
                    key={category}
                    change={change}
                    setChange={setChange}
                />
            ))}
        </div>
        
    );
}
 
export default Home;
