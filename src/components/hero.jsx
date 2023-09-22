const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500"></span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            food <span className="text-orange-500">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://raw.githubusercontent.com/Shiham123/Food-Assets/master/pexels-alexy-almond-3756498.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
