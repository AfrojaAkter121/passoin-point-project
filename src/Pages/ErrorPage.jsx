import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../public/notFound.json'; // তোমার Lottie animation path
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen   px-4 text-center">
        <Helmet>
        <title>Error _ PassionPoint</title>
      </Helmet>
      <div className="w-96 max-w-full">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h1 className="text-4xl font-bold mt-6">Oops! Page Not Found</h1>
      <p className="text-gray-400 mt-2 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
