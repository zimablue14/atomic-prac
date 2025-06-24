import type { ElementType } from '../../types';
import UserFormSection from '../organism/UserForm';

type Props = {
  elements: ElementType[];
  onAddInput: () => void;
  onDeleteInput: () => void;
};

const UserFormTemplate = ({ elements, onAddInput, onDeleteInput }: Props) => {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-xl font-bold">회원 가입</h1>
      <UserFormSection elements={elements} onAddInput={onAddInput} onDeleteInput={onDeleteInput} />
    </main>
  );
};

export default UserFormTemplate;
