import type { ElementType } from '../../types';
import Matrix from '../Matrix';

type Props = {
  elements: ElementType[];
};

const UserFormSection = ({ elements }: Props) => {
  return <Matrix elements={elements} />;
};

export default UserFormSection;
