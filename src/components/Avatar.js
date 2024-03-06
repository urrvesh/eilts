import React from "react";

const Avatar = ({ className, alt, ...rest }) => {
  return (
    <img
      className={`h-12 w-12 rounded-full object-cover object-center ${className}`}
      {...rest}
      alt={alt ?? "avatar"}
    />
  );
};

export default React.memo(Avatar);
