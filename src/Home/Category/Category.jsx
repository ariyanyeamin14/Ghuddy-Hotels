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
            <div className="flex flex-wrap gap-2 mt-6">
                {
                    categories.map(category => <NavLink to={location.pathname === `/category/${category.value}` ? `/` : `/category/${category.value}`} key={category.value} className={`mx-auto text-center hover:bg-slate-200 transition-all duration-500 p-1 md:p-2 px-3 md:px-6  rounded-lg ${location.pathname === `/category/${category.value}` ? 'bg-slate-300': ''}`}>
                        <img src={category.iconUrl} className="w-[18px] md:w-[27px] mx-auto" alt="" />
                        <h4 className="text-base md:text-lg">{category.label}</h4>
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;