import React from 'react';

const Card = ({ imageSrc, title, description, link, onClick }) => {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{description}</p>
        <button
          onClick={onClick}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
          aria-label={`Read more about ${title}`}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card;
