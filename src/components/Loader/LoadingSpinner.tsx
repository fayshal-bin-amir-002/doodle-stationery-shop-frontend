const LoadingSpinner = () => {
  return (
    <div className="flex h-[60vh] justify-center items-center">
      <div className="w-14 h-14 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
