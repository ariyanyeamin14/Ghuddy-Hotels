import { FaStar } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { IoDiamondOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const CatalogCard = ({ catalog }) => {
    const { thumb_image, short_address, property_name, user_rating, display_facilities, red_price, black_price, discount_percent } = catalog
    return (
        <Link to='/'>
            <div id="card" className="shadow-lg rounded-2xl bg-white hover:bg-slate-100 transition-all duration-300  overflow-hidden">
                <div className="relative">
                    <div className="h-[280px] overflow-hidden">
                        <img className="h-[280px] w-full rounded-t-2xl transition-transform  duration-500 overflow-hidden" src={thumb_image} alt="" />
                    </div>
                    {discount_percent > 0 && <div className="bg-[#f63131] flex items-center gap-2 text-white w-fit px-4 absolute top-4">
                        <IoDiamondOutline />
                        <div className="w-fit">
                            - {parseInt(discount_percent)} % Off
                        </div>
                    </div>}
                </div>
                <div className="p-3 flex flex-col rounded-b-2xl">
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
                    <div className="text-center my-3">
                        <p className="text-[17px] font-[500]">Checkout Price:</p>
                        <div className="flex gap-4 justify-center">
                            <h1 className="font-medium text-[21px]">{red_price} BDT</h1>
                            {
                                black_price > red_price && <h1 className=" text-xl line-through text-[#879fa8]">{black_price} BDT</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CatalogCard;