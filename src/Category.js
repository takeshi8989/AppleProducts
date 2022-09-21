import ItemCard from "./ItemCard";

const Category = ({category, items, change, setChange}) => {
    
    return (
        <div className="">
            
            {items.length > 0 &&
                <div className="category">
                    <h2>{ category }</h2>
                    <div className="cards">
                        { items.map(item => (
                            <ItemCard
                                item={item}
                                change={change}
                                setChange={setChange}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            }
            
        </div>
    );
}
 
export default Category;