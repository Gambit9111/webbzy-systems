import { ChangeEvent } from "react";

type TextAreaProps = {
    id: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    disabled: boolean;
  };
  
  const TextArea: React.FC<TextAreaProps> = ({ id, name, value, onChange, rows = 5, disabled }) => {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 mt-4 w-full"
        rows={rows}
        disabled={disabled}
      ></textarea>
    );
  };

export default TextArea