import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AddItemFormModal from "./addItemModal.layout.component";

const Slider = ({ children, category = "" }) => {
  const [showModal, setShowModal] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      partialVisibilityGutter: 100,
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 600, min: 400 },
      items: 2,
    },
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="mb-4  gap-3 flex justify-end 
            items-center w-full"
      >
        <span
          className="text-sm text-[#FA7734] cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          AddMore
        </span>
        <div className="flex gap-1 items-center">
          <button
            className={`text-lg text-slate-700 ${
              currentSlide === 0 && "disable text-slate-500"
            }`}
            onClick={() => previous()}
          >
            <FiChevronLeft />
          </button>
          <button className="text-lg text-slate-700" onClick={() => next()}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mx-auto relative flex flex-col-reverse">
        <Carousel
          swipeable={true}
          itemClass="pr-4"
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {children}
        </Carousel>
      </div>
      {showModal && (
        <AddItemFormModal setShowModal={setShowModal} category={category} />
      )}
    </>
  );
};

export default Slider;
