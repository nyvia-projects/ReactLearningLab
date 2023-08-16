type WelcomeProps = {
  name: string;
};

export const Welcome = (props: WelcomeProps) => {
  return <p>Welcome {props.name}!</p>;
};
