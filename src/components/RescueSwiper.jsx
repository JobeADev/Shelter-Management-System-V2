import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import RecentRescueCard from "./RecentRescueCard/RecentRescueCard";
import { MockRecentRescues } from "./mockRescues";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";

const RescueSwiper = (data) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      // centeredSlides={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      navigation={true}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onReachEnd={() => }
    >
      {data.props.map((rescue) => (
        <SwiperSlide key={rescue.petId}>
          <RecentRescueCard
            petId={rescue.petId}
            name={rescue.name}
            gender={rescue.gender}
            species={rescue.species}
            images={rescue.images}
            breed={rescue.breed}
            birthday={rescue.birthday}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RescueSwiper;
