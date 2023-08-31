import { LightbulbProps } from "./Lightbulb.types";
import { useState } from "react";
import { LightbulbDisplay } from "./Lightbulb";

export const LightbulbContainer = () => {
  const initialLightbulbState: LightbulbProps = {
    color: "black",
    isLow: true,
  };

  const [lightbulbState, setLightbulbState] = useState<LightbulbProps>(
    initialLightbulbState
  );

  const setBrightness = (brightness: "off" | "low" | "high") => {
    switch (brightness) {
      case "off":
        setLightbulbState({ color: lightbulbState.color, isOff: true });
        break;
      case "low":
        setLightbulbState({ color: lightbulbState.color, isLow: true });
        break;
      case "high":
        setLightbulbState({ color: lightbulbState.color, isHigh: true });
        break;
    }
  };

  const getOpacity = (): number => {
    if ("isOff" in lightbulbState) return 0;
    if ("isLow" in lightbulbState) return 0.5;
    if ("isHigh" in lightbulbState) return 1;
    return 0;
  };

  return (
    <div>
      <select
        value={lightbulbState.color}
        onChange={event =>
          setLightbulbState(prev => ({ ...prev, color: event.target.value }))
        }
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <button onClick={() => setBrightness("off")}>Off</button>
      <button onClick={() => setBrightness("low")}>Low</button>
      <button onClick={() => setBrightness("high")}>High</button>
      <LightbulbDisplay color={lightbulbState.color} opacity={getOpacity()} />
    </div>
  );
};
