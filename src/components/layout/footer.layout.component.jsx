import { FaArrowRight, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F99F1C] py-6">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center gap-5">
          <div className="w-full md:w-2/3">
            <div className="mb-16">
              <div className="w-full sm:w-4/5 relative">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="pl-4 pr-[130px] sm:pr-[150px] py-3 w-full rounded-xl shadow outline-none"
                />
                <div className="absolute right-2 top-2 flex items-center sm:text-white text-[#fc6011] sm:bg-[#FC6011] px-4 py-1 rounded-xl">
                  Subscribe <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between sm:items-end items-center sm:gap-0 gap-4">
              <div className="sm:order-1 order-2  flex flex-col sm:items-start items-center gap-3">
                <span className="text-3xl font-semibold">pit.</span>
                <p className="font-medium">
                  Copyright&copy;Tripp.All Right Reserved
                </p>
              </div>
              <div className="sm:order-2 order-1 flex gap-1">
                <div className="w-8 h-8 rounded-full p-2 hover:bg-[#FC6011] bg-[#FEDDBA] flex items-center justify-center hover:text-white text-[#FC6011]">
                  <FaGoogle />
                </div>
                <div className="w-8 h-8 rounded-full p-2 hover:bg-[#FC6011] bg-[#FEDDBA] flex items-center justify-center hover:text-white text-[#FC6011]">
                  <FaTwitter />
                </div>
                <div className="w-8 h-8 rounded-full p-2 hover:bg-[#FC6011] bg-[#FEDDBA] flex items-center justify-center hover:text-white text-[#FC6011]">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/6 md:block hidden">
            <img src="./Image2.png" alt="footer image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
