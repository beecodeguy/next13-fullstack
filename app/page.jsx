import Feed from "@components/Feed";

const Home = () => {
  return <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">Discover and Share <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI powered Prompts</span>
    </h1>
    <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum, dolore corrupti ut suscipit rerum atque? Alias commodi animi, rem, sit tenetur eius, eligendi enim repellendus quod eaque nobis. Iusto.</p>
    {/* FEED  */}
    <Feed />
  </section>;
};

export default Home;
