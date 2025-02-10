import CatalogCard from "../CatalogCard/CatalogCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Skeleton from "../../components/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const DefaultCatalogs = () => {

    const {data: catalogs = [], isLoading, isFetching} = useQuery({
        queryKey: ['catalogs'],
        queryFn: async() => {
            const res = await axios.get(`https://ghuddy.link/api/v1/open/get/rental-property/es-deals-hotels?checkinDate=2025-02-02&checkoutDate=2025-02-04&requestId=123`)
            return res.data.esHotelCardList
        }
    })

    return (
        <div className="my-4">
            <h1 className="font-medium text-[34px]">Top Hotels</h1>
            <div className="flex justify-between my-2">
                <FaLongArrowAltLeft />
                <FaLongArrowAltRight />
            </div>
            <div className="">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        360: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1424: {
                            slidesPerView: 3.5,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        catalogs.length > 0 && !isLoading && !isFetching?
                            catalogs.map(catalog => (
                                <SwiperSlide key={catalog.id} className="py-4 px-1">
                                    <CatalogCard catalog={catalog}>
                                    </CatalogCard>
                                </SwiperSlide>))
                            :
                            <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-10'>
                                <Skeleton></Skeleton>
                                <Skeleton></Skeleton>
                                <Skeleton></Skeleton>
                                <Skeleton></Skeleton>
                            </div>
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default DefaultCatalogs;