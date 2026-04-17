const Loading = () => {
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-500">Loading friends...</p>
    </div>
  );
};

export default Loading;