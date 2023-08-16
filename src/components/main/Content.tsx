import "./Content.css";

type FrameworkColorPair = {
  framework: string;
  color: string;
};

type FrameworkListProps = {
  frameworks: FrameworkColorPair[];
};

export const FrameworkList: React.FC<FrameworkListProps> = ({ frameworks }) => {
  return (
    <div>
      {frameworks.map((pair, index) => (
        <h3 key={index} style={{ color: pair.color }}>
          {pair.framework}
        </h3>
      ))}
    </div>
  );
};
