import { useState } from "react";

export const Clicked = () => {
  const [isActive, setIsClicked] = useState(false);

  const handleActivate = () => {
    setIsClicked(true);
  };

  const handleDeactivate = () => {
    setIsClicked(false);
  };
  return (
    <div>
      <button onClick={handleActivate}>Activate</button>
      <button onClick={handleDeactivate}>Deactivate</button>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  );
};
