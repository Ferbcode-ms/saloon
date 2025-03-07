import React from "react";

const OptimizedImage = ({ src, alt, className, width, height, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;
