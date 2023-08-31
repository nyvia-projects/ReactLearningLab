export type ProfileProps = {
  username: string;
};

export const Profile = ({ username }: ProfileProps) => {
  return <div>Private profile component - username: {username}</div>;
};
