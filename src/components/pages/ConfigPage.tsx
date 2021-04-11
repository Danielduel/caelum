import React from "react";
import "./ConfigPage.css";
import dragula from "dragula";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import widgetDefinitionList from "../../widgets/Widgets";

const WidgetList: React.FunctionComponent = () => {
  const items = widgetDefinitionList.map((Item) => <Item.widgetThumbnail key={Item.name} />);
  return <>{items}</>;
};

const accepts = (_el?: Element, target?: Element): boolean => {
  return target?.className === "grid-container";
};

const ConfigPage: React.FunctionComponent = () => {
  const listContainer = React.useRef<HTMLDivElement>(null);
  const gridContainer = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (listContainer.current && gridContainer.current) {
      dragula([listContainer.current, gridContainer.current], {
        copy: true,
        accepts
      });
    }
  }, [listContainer, gridContainer]);
  return (
    <div className="config-container">
      <div className="widget-list-container">
        <div ref={listContainer} className="list-container">
          <WidgetList></WidgetList>
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
