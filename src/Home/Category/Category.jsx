import { useEffect, useState } from "react";

const Category = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch('/propertyType.json')
            .then(res => res.json())
            .then(res=> setCategories(res))
    }, [])

    console.log(categories)
    return (
        <div>
            <h2 className="font-medium text-[44px]">Hotels</h2>
        </div>
    );
};

export default Category;