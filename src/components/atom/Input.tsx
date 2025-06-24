type Props = {
  attr: {
    label: string;
    placeholder?: string;
  };
};

const Input = ({ attr }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">{attr.label}</label>
      <input type="text" placeholder={attr.placeholder} className="rounded border px-2 py-1" />
    </div>
  );
};

export default Input;
