import React from "react";

const More = () => {
  return (
    <div>
      {/* Card-1  */}
      <div class="w-96 mx-auto my-12 rounded-lg wrapper bg-gray-400 antialiased text-gray-900">
        <div>
          <img
            src="https://source.unsplash.com/random/350x350"
            alt=" random imgee"
            class="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div class="relative px-4 -mt-16  ">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div class="mt-1">
                $1800
                <span class="text-gray-600 text-sm"> /wk</span>
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span class="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card-2  */}
      <div className="flex w-96 mx-auto">
        <div class="p-10">
          <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://i.ibb.co/Fq0V1Hw/art1.jpg"
              alt="Mountain"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Mountain</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
