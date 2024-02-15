"use client";
import * as Yup from "yup";
import Button from "@/components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import TextFieldForm from "@/components/TextFieldForm";
import Card from "@/components/Card";
import FormType from "@/types/FormType";

interface FormValues {
  [key: string]: any; // Adjust the type according to your actual form values
}

function SearchForm({
  onSubmit,
  query,
}: {
  onSubmit: (data: any) => void;
  query: {
    binding: string;
    label: string;
    defaultValue?: string;
    rule?: Yup.StringSchema<string | undefined, Yup.AnyObject, undefined, "">;
    formType: FormType;
  }[];
}) {
  const validationSchema = Yup.object().shape({
    ...query.reduce((acc, cur) => ({ ...acc, [cur.binding]: cur.rule }), {}),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { handleSubmit, formState, control } = useForm<FormValues>(formOptions);
  const { errors, isSubmitting } = formState;

  return (
    <Card title="検索">
      <form name="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-2">
          {query.map((item) => (
            <div className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/12">
              {item.formType === FormType.TextField && (
                <TextFieldForm
                  label={item.label}
                  id={item.binding}
                  control={control}
                />
              )}
              {errors[item.binding]?.message && (
                <p className="text-red-500">
                  {String(errors[item.binding]?.message)}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end mb-2 mr-5">
          <Button text="検索" />
        </div>
      </form>
    </Card>
  );
}

export default SearchForm;
