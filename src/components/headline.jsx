const Headline = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/80 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Suns out grab the food</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 px-4 py-2 absolute bottom-4 rounded-xl">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://raw.githubusercontent.com/Shiham123/Food-Assets/master/pexels-spencer-davis-4393021.jpg"
          alt=""
        />
      </div>

      {/* card */}

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/80 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Suns out grab the food</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 px-4 py-2 absolute bottom-4 rounded-xl">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://raw.githubusercontent.com/Shiham123/Food-Assets/master/pexels-spencer-davis-4393021.jpg"
          alt=""
        />
      </div>

      {/* card */}

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/80 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Suns out grab the food</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 px-4 py-2 absolute bottom-4 rounded-xl">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://raw.githubusercontent.com/Shiham123/Food-Assets/master/pexels-spencer-davis-4393021.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Headline;
