import { ComboBox as WjCombobox } from "@grapecity/wijmo.react.input";
import { ComboBox } from "@grapecity/wijmo.input";

function TextField({
  id,
  type = "text",
  onChange,
}: {
  id: string;
  type: string;
  onChange: (text: string) => void;
}) {
  return (
    <WjCombobox
      textChanged={(e: ComboBox) => {
        onChange(e.text ?? "");
      }}
      isRequired={false}
      className="mt-0"
      id={id}
      inputType={type}
    />
  );
}

export default TextField;
