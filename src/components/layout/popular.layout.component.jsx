import { useContext } from "react";
import { DataContext } from "../../context/food.context";
import CardItem from "./card.component";
import Slider from "./carousel.component";

const PopularItem = () => {
  const { state } = useContext(DataContext);

  return (
    <section className="pb-10">
      <div className="container mx-auto px-3">
        <h3 className="text-[#333] text-xl">Popular</h3>
        <div>
          <Slider category="popular">
            {state?.data
              .filter((v) => v.IsPopular)
              .map((p, index) => {
                return <CardItem key={index} item={p} />;
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularItem;
