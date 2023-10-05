import React, { useEffect, useState } from "react";
import TitleSection from "../../../Share/TitleSection/TitleSection";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import fakeReview from "./fakeReview";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const Review = () => {
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  const [reviews, refetch] = fakeReview();
  console.log(reviews);
  const toggleFullReview = (id) => {
    if (expandedReviewId === id) {
      setExpandedReviewId(null);
    } else {
      setExpandedReviewId(id);
    }
  };
  const getShortenedReview = (text) => {
    if (typeof text !== "string") return ""; // Handle non-string values

    const words = text.split(" ");
    if (words.length <= 15) return text;

    const shortenedWords = words.slice(0, 15);
    return `${shortenedWords.join(" ")}... `;
  };
  return (
    <section className="w-10/12 mx-auto">
      <TitleSection
        MainTitle={"Client Says Templates and Components"}
        SubTitle={
          "Bridging Design Nuances, Elevating User Interactions, Crafting Tomorrow's Web."
        }
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 3,

            spaceBetween: 30,
          },
        }}
      >
        {reviews &&
          reviews.map((review) => (
            <SwiperSlide key={review._id} className="mb-10">
              <div className="flex flex-col p-4 mx-auto divide-y rounded-md divide-gray-500 bg-gray-800 text-gray-100">
                <div className="flex justify-between py-4">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 rounded-full">
                      <img
                        src={review?.image}
                        alt=""
                        className=" rounded-full bg-gray-500"
                      />
                    </div>
                    <div className="text-start ">
                      <h4 className="font-bold">{review?.name}</h4>
                      <span className="text-xs text-gray-400">2 days ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-500">
                    {/* <FaStar /> */}
                    <span className="text-xl font-bold">
                      <div class="group cursor-pointer relative inline-block">
                        <Rating
                          readonly
                          className="text-black"
                          placeholderRating={review.ratting}
                          emptySymbol={<FaRegStar color="yellow" />}
                          placeholderSymbol={<FaStar color="yellow" />}
                          fullSymbol={<FaStar color="yellow" />}
                        />
                        <div class="opacity-0  bg-black text-white text-center text-base rounded-lg py-1 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-10 px-3 pointer-events-none">
                          {review.ratting}
                          <svg
                            class="absolute text-black h-2 w-full left-0 top-full"
                            x="0px"
                            y="0px"
                            viewBox="0 0 255 255"
                            xml:space="preserve"
                          >
                            <polygon
                              class="fill-current"
                              points="0,0 127.5,127.5 255,0"
                            />
                          </svg>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className=" pt-2 space-y-2 text-gray-200">
                  <p className="text-base text-start">
                    {review?.review &&
                    typeof review.review === "string" &&
                    review.review.split(" ").length > 15 &&
                    expandedReviewId !== review._id ? (
                      <>
                        {getShortenedReview(review.review)}
                        <button
                          className="text-blue-500 ml-2"
                          onClick={() => toggleFullReview(review._id)}
                        >
                          Read more
                        </button>
                      </>
                    ) : (
                      <>
                        {review?.review}
                        {review.review.split(" ").length > 15 && (
                          <button
                            className="text-blue-500 ml-2"
                            onClick={() => toggleFullReview(review._id)}
                          >
                            See less
                          </button>
                        )}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Review;
