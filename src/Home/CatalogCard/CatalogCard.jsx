import { FaStar } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";

const CatalogCard = ({ catalog }) => {
    const { thumb_image, short_address, property_name, user_rating, display_facilities, red_price, black_price, discount_percent } = catalog
    return (
        <div className="shadow-lg rounded-2xl">
            <img className="h-[280px] w-full rounded-t-2xl" src={thumb_image} alt="" />
            <div className="p-3 flex flex-col">
                <div className="flex justify-between ">
                    <h2 className="text-[22px] font-medium h-[30px] overflow-hidden">{property_name}</h2>
                    <div className="flex gap-2 text-lg font-medium " > <FaStar size={26} color="#f6d731" /> {user_rating} </div>
                </div>
                <div className="flex items-center text-xl gap-3 mt-2">
                    <SlLocationPin />
                    <h4>{short_address}</h4>
                </div>
                <div className="flex text-xl gap-3 mt-4">
                    <GrHomeRounded className="mt-1" />
                    <div className="w-full h-[87px] overflow-hidden">
                        {
                            display_facilities.map((facility, index) => <p key={index} className="inline-block mr-2">{facility.name}, </p>)
                        }
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="text-lg">Checkout Price:</p>
                    <div className="flex gap-4 justify-center">
                        <h1 className="font-medium text-xl">{red_price} BDT</h1>
                        <h1 className="font-medium text-xl line-through text-gray-400">{black_price} BDT</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogCard;