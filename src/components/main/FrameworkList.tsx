import { FrameworkListProps } from "./FrameworkList.types";

export const FrameworkList = ({ frameworks }: FrameworkListProps) => {
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
