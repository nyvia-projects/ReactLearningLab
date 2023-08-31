type LightbulbDisplayProps = {
  color: string;
  opacity: number;
};

export const LightbulbDisplay = ({ color, opacity }: LightbulbDisplayProps) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: color,
        opacity: opacity,
        margin: "10px",
      }}
    ></div>
  );
};
