"use client";
import ListForm from "@/components/ListForm";
import SearchForm from "@/components/SearchForm";
import { DataType } from "@grapecity/wijmo";
import { ApiClient } from "@/lib/api-client";
import { useState } from "react";
import { Village } from "@/api/@types";
import FormType from "@/types/FormType";
import * as Yup from "yup";
import Card from "@/components/Card";
export default function Page() {
  const [items, setItems] = useState<Village[]>([]);
  const columns = [
    {
      binding: "idm",
      header: "村ID",
      dataType: DataType.String,
    },
    { binding: "name", header: "村名(和文)", dataType: DataType.String },
    {
      binding: "name_en",
      header: "村名(欧文)",
      dataType: DataType.String,
    },
  ];
  const query = [
    {
      binding: "idm",
      label: "村ID",
      rule: Yup.string().required(),
      defaultValue: "hoge",
      formType: FormType.TextField,
    },
    {
      binding: "name",
      label: "村名(和文)",
      rule: Yup.string(),
      formType: FormType.TextField,
    },
    {
      binding: "name_en",
      label: "村名(欧文)",
      rule: Yup.string(),
      formType: FormType.TextField,
    },
  ];
  const search = async (data: any) => {
    const res = await ApiClient.villages.$get({
      query: data,
    });
    setItems(res.items);
  };
  return (
    <div>
      <Card title="操作種別">
        <div className="flex">
          <input type="radio" name="operation" value="search" checked />
          <label className="mx-2">参照する</label>
          <input type="radio" name="operation" value="edit" className="ml-2" />
          <label className="mx-2">登録・編集する</label>
        </div>
      </Card>
      <SearchForm onSubmit={search} query={query} />
      <ListForm itemsSource={items} columns={columns} />
    </div>
  );
}
