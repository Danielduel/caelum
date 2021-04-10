import LinkIcon from "../organisms/buttons/LinkIcon";

const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      <LinkIcon to="/config" iconType="gear" />
      Home
    </div>
  );
};

export default HomePage;
