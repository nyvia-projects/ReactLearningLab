type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={event => {
        props.handleClick(event);
      }}
    >
      Generate Random Frameworks
    </button>
  );
};
