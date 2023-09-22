import { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  const [foods, setFood] = useState(data);

  // filter here
  const filterType = (category) => {
    setFood(
      data.filter((food) => {
        return food.category === category;
      })
    );
  };

  // filter by price

  const filterPrice = (price) => {
    setFood(
      data.filter((food) => {
        return food.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Item
      </h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700 uppercase">Filter type </p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => {
                setFood(data);
              }}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              ALl
            </button>
            <button
              onClick={() => {
                filterType('burger');
              }}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              Burger
            </button>
            <button
              onClick={() => {
                filterType('pizza');
              }}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              Pizza
            </button>
            <button
              onClick={() => {
                filterType('chicken');
              }}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              Chicken
            </button>
            <button
              onClick={() => {
                filterType('salad');
              }}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              Salad
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700 uppercase">filter price</p>
          <div className=" flex justify-between  ">
            <button
              onClick={() => filterPrice('$')}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-4 px-7 py-2 rounded-xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food, index) => {
          const { image, name, price } = food;
          return (
            <div
              key={index}
              className="border-2 shadow-lg rounded-lg hover:scale-105 duration-300 "
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={image}
                alt={name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-2 rounded-full">
                    {price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
