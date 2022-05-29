import React from "react";

const SpinLoader = () => {
  return (
    <div className="center-content flex w-full">
      <div className="mx-1 h-2 w-2 animate-spin rounded-full border-t-4 border-secondary-500"></div>
      <div className="mx-1 h-2 w-2 animate-spin rounded-full border-t-4 border-secondary-500"></div>
      <div className="mx-1 h-2 w-2 animate-spin rounded-full border-t-4 border-secondary-500"></div>
    </div>
  );
};
export default SpinLoader;