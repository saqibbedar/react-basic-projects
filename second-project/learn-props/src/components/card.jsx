import React from "react";

const card = (props) => {
  const { obj } = props;

  return (
    <>
      <div className="flex justify-center m-8">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {obj.cardTitle || "Card title"}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {obj.cardDescription ||
                "Some quick example text to build on the card title and make up the bulk of the card's content."}
            </p>
            <button
              type="button"
              className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {obj.cardBtnValue || "Button"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
