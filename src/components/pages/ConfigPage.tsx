import React from "react";
import "./ConfigPage.css";
import dragula from "dragula";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";

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
      <div className="widget-list-container">
        <div ref={listContainer} className="list-container">
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
        </div>
        <div className="widget-list-buttons">
          <Tooltip title="delete">
            <Button size="large" shape="circle" icon={<DeleteOutlined />} />
          </Tooltip>
          <Tooltip title="save">
            <Button size="large" shape="circle" icon={<CheckOutlined />} />
          </Tooltip>
        </div>
      </div>
      <div ref={gridContainer} className="grid-container"></div>
    </div>
  );
};

export default ConfigPage;
