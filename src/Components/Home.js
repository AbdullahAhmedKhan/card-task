import {
  faChevronRight,
  faCircleQuestion,
  faHeart,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data[0]));
  }, []);
  return (
    <div className="m-5 lg:mx-60 shadow-lg">
      <h1 class="px-5 pt-4 text-3xl font-bold">{blog.title}</h1>
      <small className="font-bold px-5 text-gray-400">
        Multi-Day Course
        <FontAwesomeIcon className="ml-1" icon={faCircleQuestion} />
      </small>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={blog.img1} class="w-48 max-w-sm rounded-lg shadow-2xl" />
          <img src={blog.img2} class="w-48 max-w-sm rounded-lg shadow-2xl" />
          <div className="">
            <p class="py-6">{blog.description}</p>

            <div class="avatar">
              <div class="w-6 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
              <span className="ml-2 font-bold text-primary text-sm">
                {blog.user}
              </span>
            </div>
            <div className="mt-1">
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>

              <small className="text-xs ml-2 text-gray-500">
                {blog.reviewTeacher} total reviews for this teacher
              </small>
            </div>
            <div className="mt-1 mb-3">
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-warning text-sm"
                icon={faStar}
              ></FontAwesomeIcon>

              <small className="text-xs ml-2 text-gray-500">
                {blog.reviewClass} reviews for this class
              </small>
            </div>
            <p className="text-sm font-bold mb-8">
              Completed by {blog.learners} learners
            </p>
            <div>
              <button class="rounded-full btn-sm btn btn-primary normal-case">
                See Class Schedule
                <FontAwesomeIcon
                  className="ml-1"
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </button>
              <span className="text-primary">
                <FontAwesomeIcon className="ml-8 mr-1" icon={faHeart} />
                Save
              </span>
              <span className="text-primary">
                <FontAwesomeIcon className="ml-8 mr-1" icon={faShare} />
                Share
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
