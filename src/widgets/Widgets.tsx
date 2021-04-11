import React from "react";

type WidgetDefinition = {
  name: string;
  widget: React.FunctionComponent;
  widgetThumbnail: React.FunctionComponent;
};

type WidgetListDefinition = WidgetDefinition[];

const WidgetA: React.FunctionComponent = () => {
  return <div className="widget">WIDGET</div>;
};

const WidgetAThumbnail: React.FunctionComponent = () => {
  return <div className="widget-thumbnail">LIST ITEM</div>;
};

const widgetDefinitionList: WidgetListDefinition = [
  { name: "Widget A", widget: WidgetA, widgetThumbnail: WidgetAThumbnail },
  { name: "Widget B", widget: WidgetA, widgetThumbnail: WidgetAThumbnail },
  { name: "Widget C", widget: WidgetA, widgetThumbnail: WidgetAThumbnail },
  { name: "Widget D", widget: WidgetA, widgetThumbnail: WidgetAThumbnail },
  { name: "Widget E", widget: WidgetA, widgetThumbnail: WidgetAThumbnail }
];

export default widgetDefinitionList;
