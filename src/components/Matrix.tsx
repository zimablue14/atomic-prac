import type { ElementType } from '../types';

import Checkbox from './atom/Checkbox';
import Input from './atom/Input';
import FormContainer from './molecule/FormContainer';

const convertStrToComponent = (str: string) => {
  switch (str) {
    case 'Input':
      return Input;
    case 'Checkbox':
      return Checkbox;
    default:
      return () => <div>Unknown Component</div>;
  }
};

type Props = {
  elements: ElementType[];
};

const Matrix = ({ elements }: Props) => {
  const renderElement = (el: ElementType, index: number) => {
    const Comp = convertStrToComponent(el.tagName);
    return <Comp key={index} attr={el.attr} />;
  };

  return (
    <div className="space-y-4">
      {elements.map((el, idx) =>
        el.tagName === 'Group' ? (
          <FormContainer key={idx} attr={el.attr}>
            {el.children?.map((child, childIdx) => renderElement(child, childIdx))}
          </FormContainer>
        ) : (
          renderElement(el, idx)
        ),
      )}
    </div>
  );
};

export default Matrix;
