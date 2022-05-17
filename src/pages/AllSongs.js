import Songs from "../assets/components/allsongs/Songs";


const AllSongs = () => {
  return (
    <>
      <h1 className="text-[48px] ml-[25px] mt-[47px] mb-[27px] w-screen font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradientRedFrom to-gradientRedTo">All Songs</h1>
      <section className="flex flex-col gap-4">
        <Songs/>
        <Songs/>
        <Songs/>
      </section>
    </>
  );
};

export default AllSongs;
