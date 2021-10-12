import React from "react";

const Button = ({ children, onClickFn, cName }) => {
  return (
    <>
      {onClickFn ? (
        <button onClick={onClickFn} className={cName}>
          {children}
        </button>
      ) : (
        <button className={cName}>{children}</button>
      )}
    </>
  );
};

export default Button;
