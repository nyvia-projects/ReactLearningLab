type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Object destructuring
export const Input = ({ value, handleChange }: InputProps) => {
  return <input type="text" value={value} onChange={handleChange} />;
};
