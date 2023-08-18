type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GenerateButton = (props: ButtonProps) => {
  return (
    <button
      onClick={event => {
        props.handleClick(event);
      }}
    >
      Generate
    </button>
  );
};

export const ClearButton = (props: ButtonProps) => {
  return (
    <button
      onClick={event => {
        props.handleClick(event);
      }}
    >
      Clear
    </button>
  );
};
