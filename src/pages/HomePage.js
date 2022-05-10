import PulseFigure from "../assets/img/SVG/SVG/PulseFigure";
import { BsCircleHalf, BsHeart, BsMusicNoteBeamed } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b dark:from-gradientRedFrom to-gradientRedTo flex flex-col items-center">
        <div className="relative top-[-2rem] left-[-1rem]  ">
            <PulseFigure className="w-[20rem] h-[20rem]" />
        </div>
    

      <div className="w-[80%]">
        <h1 className="text-center font-bold text-3xl my-[1rem] dark:text-white ">
            {"No Music"} <br />
            {"No Life"}
        </h1>
        <p className="text-center text-lg dark:text-white">
            {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum distinctio, sint ab iste, voluptatem nesciunt rem"}
        </p>
      </div>

      <nav className="w-[80%] my-[5rem] text-5xl dark:text-white flex flex-row justify-around">
        <div className="border-4 border-black dark:border-white rounded-full p-[1rem] flex justify-center items-center">
          <BsCircleHalf />
        </div>
        <div className="border-4 border-black  dark:border-white rounded-full p-[1rem] flex justify-center items-center">
          <BsHeart />
        </div>
        <div className="border-4 border-black  dark:border-white rounded-full p-[1rem] flex justify-center items-center">
          <BsMusicNoteBeamed />
        </div>
      </nav>
    </div>
  );
};


export default HomePage;
