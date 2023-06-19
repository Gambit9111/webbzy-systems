type LabelProps = {
    htmlFor: string;
    labelText: string;
    children: React.ReactNode;
  };

const Label: React.FC<LabelProps> = ({ htmlFor, labelText, children }) => {
    return (
      <label htmlFor={htmlFor} className="block mt-4">
        {labelText}
        {children}
      </label>
    );
  };

export default Label;