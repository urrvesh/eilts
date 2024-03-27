import React from "react";

const Loader = () => {
  return (
    <div className="absolute w-full flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-gray-500" />
    </div>
  );
};

export default React.memo(Loader);
