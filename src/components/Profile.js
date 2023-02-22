const Profile = (props) => {
  const { name, lastname } = props;
  return (
    <h1>
      Profile.js: {name} {lastname}
    </h1>
  );
};

export default Profile;
