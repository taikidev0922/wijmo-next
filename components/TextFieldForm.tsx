import TextField from "@/components/TextField";
import { Controller } from "react-hook-form";
function TextFieldForm({
  id,
  label,
  type = "text",
  control,
}: {
  id: string;
  label: string;
  type?: string;
  control: any;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <TextField id={id} type={type} onChange={field.onChange} />
        )}
      />
    </div>
  );
}

export default TextFieldForm;
