const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-green-700">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;