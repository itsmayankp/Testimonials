import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

function Testimonial(props){

    let reviews = props.reviews;
    let [index, setIndex] = useState(0);

    function leftShiftHandeler(){
        if(index-1 <0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }

    function rightShiftHandeler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function surpriseHandeler(){
        let randomIndex = Math.floor(Math.random()* reviews.length);
        setIndex(randomIndex);
    }



    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col items-center justify-center mt-10 p-10 transition-all duration-300 hover:shadow-md rounded-md">
            <Card review = {reviews[index]}></Card>

            <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold">
                <button
                onClick={leftShiftHandeler}
                className="cursor-pointer hover:text-violet-700">
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button 
                onClick={rightShiftHandeler}
                className="cursor-pointer hover:text-violet-700">
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>

            <div>
                <button 
                onClick={surpriseHandeler}
                className="bg-violet-400 hover:bg-violet-700 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5">
                    Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Testimonial;