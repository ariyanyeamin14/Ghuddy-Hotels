import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    // console.log(location.pathname)

    useEffect(() => {
        fetch('/propertyType.json')
            .then(res => res.json())
            .then(res => setCategories(res.slice(0, 11)))
    }, [])

    return (
        <div>
            <h2 className="font-medium text-[44px]">Hotels</h2>
            <div className="flex flex-wrap gap-2 md:gap-10 mt-6">
                {
                    categories.map(category => <NavLink to={location.pathname === `/category/${category.value}` ? `/` : `/category/${category.value}`} key={category.value} className={`mx-auto text-center p-2 ${location.pathname === `/category/${category.value}` ? 'bg-yellow-400': ''}`}>
                        <img src={category.iconUrl} className="w-[27px] mx-auto" alt="" />
                        <h4 className="text-lg">{category.label}</h4>
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;