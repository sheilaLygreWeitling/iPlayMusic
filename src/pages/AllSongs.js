import Songs from "../assets/components/allsongs/Songs";

const AllSongs = () => {
  return (
    <>
      <h1 className="text-[48px] w-screen">All Songs</h1>
      <section className="flex flex-col">
        <Songs/>
        <Songs/>
        <Songs/>
      </section>
    </>
  );
};

export default AllSongs;
