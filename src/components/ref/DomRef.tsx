import { useRef, useEffect } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null); //null! if never null

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={() => alert(inputRef.current?.value)}>Print</button>
    </div>
  );
};
