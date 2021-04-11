import LinkIcon from "../organisms/buttons/LinkIcon";
import Grid from "../organisms/grid/Grid";
import styled from "styled-components";
import GridItem from "../organisms/grid/GridItem";

const Test = styled.div`
  width: 100%;
  height: 100%;
  background-color: turquoise;
`;

const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      <LinkIcon to="/config" iconType="gear" />
      <Grid>
        <GridItem column={1} row={1} columnSpan={2}>
          <Test />
        </GridItem>
        <GridItem column={3} row={2} columnSpan={2} rowSpan={2}>
          <Test />
        </GridItem>
      </Grid>
    </div>
  );
};

export default HomePage;
