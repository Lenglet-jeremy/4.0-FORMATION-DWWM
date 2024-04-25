import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} type="text" className="mr-15 mb-20" />
    </>
  );
});

export default Input;
