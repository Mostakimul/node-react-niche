import React from 'react';
import blog1 from '../../../img/blog1.jpg';
import blog2 from '../../../img/blog2.jpg';
const Blog = () => {
  return (
    <div className=" py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <div className="my-3 md:0">
          <img src={blog1} alt="blog" className="w-full" />
        </div>
        <div className="space-y-2">
          <h2 className="font-display text-3xl text-center">Latest News</h2>
          <h3 className="font-display text-5xl text-center">
            Why Buy Olive Oil Online?
          </h3>
          <p className="text-gray-600 mb-5 text-center">
            Mauris imperdiet orci dapibus, commodo libero nec interdum tortorbi
          </p>
          <button className="bg-red-300 block mx-auto text-center py-2 px-5 rounded shadow">
            View More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:0 gap-5 md:gap-0 items-center">
        <div className="space-y-2">
          <h2 className="font-display text-3xl text-center">Recipes</h2>
          <h3 className="font-display text-5xl text-center">
            What's Our Team Cooking
          </h3>
          <p className="text-gray-600 mb-5 text-center">
            Mauris imperdiet orci dapibus, commodo libero nec interdum tortorbi
          </p>
          <button className="bg-red-300 block mx-auto text-center py-2 px-5 rounded shadow">
            View More
          </button>
        </div>
        <div className="my-3 md:0">
          <img src={blog2} alt="blog" className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default Blog;
