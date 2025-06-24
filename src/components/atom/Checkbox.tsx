type Props = {
  attr: {
    label: string;
  };
};

const Checkbox = ({ attr }: Props) => {
  return (
    <label className="inline-flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span>{attr.label}</span>
    </label>
  );
};

export default Checkbox;
