"use client";

import React from "react";
import { FlexGrid as WjFlexGrid } from "@grapecity/wijmo.react.grid";
import { FlexGrid as FlexGridType } from "@grapecity/wijmo.grid";
import { DataType } from "@grapecity/wijmo";
import Card from "./Card";
export default function ListForm({
  itemsSource,
  columns,
}: {
  itemsSource: any[];
  columns: { binding: string; header: string; dataType: DataType }[];
}) {
  const onInit = (flexGrid: FlexGridType) => {
    flexGrid.autoGenerateColumns = false;
  };
  return (
    <Card title="一覧">
      <WjFlexGrid
        initialized={onInit}
        itemsSource={itemsSource}
        columns={columns}
        style={{ height: "500px" }}
      ></WjFlexGrid>
    </Card>
  );
}
