import { useContext } from "react";
import { EngineContext } from "./EngineContext";

export const Engine = () => {
  const engineContext = useContext(EngineContext);
  const handleRegister = () => {
    engineContext.setEngine({ name: "S63", type: "V8" });
  };
  const handleForget = () => {
    engineContext.setEngine(null);
  };
  return (
    <div>
      <div>Engine: {engineContext.engine?.name}</div>
      <div>Type: {engineContext.engine?.type}</div>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleForget}>Forget</button>
    </div>
  );
};
