import React from "react";

interface LoadingProps {
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fullScreen }) => {
  if (fullScreen) {
    return <div> Loading Fullscreen </div>;
  }
  return <div>Component Loading </div>;
};

export default Loading;
