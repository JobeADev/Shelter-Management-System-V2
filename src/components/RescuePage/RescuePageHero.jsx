const RescuePageHero = (rescue) => {
  return (
    <img
      className="rescue-page-hero"
      src={
        rescue.images
          ? rescue.images[rescue.activeIndex]
          : "http://localhost:9000/pet_image/SMS-none.png"
      }
      alt={rescue.name}
    />
  );
};

export default RescuePageHero;
