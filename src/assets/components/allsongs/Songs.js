import PlayIcon from "../../img/SVG/PlayIcon";


const Songs = () => {
    return ( 
        <article className="flex gap-4 items-center mr-[25px] ml-[19px]">
        <PlayIcon />
        <div>
          <h2 className="text-headers6 font-bold">Old Town Road</h2>
          <h3 className="text-small">Billy Ray Cyrus</h3>
        </div>
          <p className="text-small  ml-auto">3:58</p>
      </article> );
}
 
export default Songs;