import React from "react";
import "./ConfigPage.css";
import dragula from "dragula";

const DrawerItem: React.FunctionComponent = () => {
  return <div className="drawer-item">item</div>;
};

const ConfigPage: React.FunctionComponent = () => {
  const listContainer = React.useRef<HTMLDivElement>(null);
  const gridContainer = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (listContainer.current && gridContainer.current) {
      dragula([listContainer.current, gridContainer.current]);
    }
  }, [listContainer, gridContainer]);
  return (
    <div className="config-container">
      <div ref={listContainer} className="widget-list-container">
        <DrawerItem />
        <DrawerItem />
        <DrawerItem />
      </div>
      <div ref={gridContainer} className="grid-container"></div>
    </div>
  );
};

export default ConfigPage;
