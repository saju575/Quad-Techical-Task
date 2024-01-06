const Banner = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto px-3 lg:bg-[#F99F1C] rounded-3xl">
        <div className="flex lg:flex-row flex-col items-center justify-between lg:px-40 pt-6 lg:gap-0 gap-24">
          <div className="flex flex-col gap-10">
            <h2 className="capitalize text-5xl font-medium text-[#333] lg:text-[#FFEFE7] lg:text-left text-center">
              Deliver food to your door step
            </h2>
            <p className="text-2xl text-[#333] lg:text-[#FFEFE7] lg:text-left text-center">
              Authentic Food, Quick Service, Fast Delivery
            </p>
          </div>
          <div className="lg:bg-transparent bg-[#FD9460] lg:rounded-none rounded-3xl">
            <img src="/Image1.png" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
