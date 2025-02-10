import { Outlet } from "react-router-dom";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div className="bg-[#f5f9fa] min-h-screen text-[#142B33]">
            <div className="w-[80%] mx-auto py-16">
                <Category></Category>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;