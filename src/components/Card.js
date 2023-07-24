import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


function Card(props){

    let review = props.review;


    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img src={review.image}
                className=" rounded-full w-[140px] h-[140px] z-[25]"></img>
                <div className="w-[140px] h-[140px] rounded-full bg-gray-800 absolute -top-2 left-2 z-[-20]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
                <p className="text-violet-500 uppercase">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft></FaQuoteLeft>
            </div>

            <div className="text-center mt-5 mb-5">
                <p className="text-slate-500">
                    {review.text};
                </p>
            </div>

            <div className="text-violet-400 mx-auto mb-3">
                <FaQuoteRight></FaQuoteRight>
            </div>
        </div>
    );

}

export default Card;