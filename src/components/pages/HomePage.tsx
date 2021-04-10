import GearButton from "../organisms/buttons/GearButton";

const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      <GearButton to="/config" />
      Home
    </div>
  );
};

export default HomePage;
