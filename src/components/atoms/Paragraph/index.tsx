type ParagraphProps = {
  reverse?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ className = '', ...props }: ParagraphProps) => {
  return (
    <p className={`mt-4 font-sans text-base leading-[1.3] text-gray-900 ${className}`} {...props} />
  );
};

export default Paragraph;
