type Props = {
  attr: {
    label?: string;
  };
  children: React.ReactNode;
};

const FormContainer = ({ attr, children }: Props) => {
  return (
    <fieldset className="rounded-md border p-4">
      {attr.label && <legend className="mb-2 text-sm font-medium">{attr.label}</legend>}
      <div className="space-y-2">{children}</div>
    </fieldset>
  );
};

export default FormContainer;
