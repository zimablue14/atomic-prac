import type { ElementType } from '../../types';
import Matrix from '../Matrix';

type Props = {
  elements: ElementType[];
  onAddInput: () => void;
  onDeleteInput: () => void;
};

const UserFormSection = ({ elements, onAddInput, onDeleteInput }: Props) => {
  return (
    <section className="space-y-4">
      <Matrix elements={elements} />
      <div className="flex gap-2">
        <button
          onClick={onAddInput}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Input 추가
        </button>
        <button
          onClick={onDeleteInput}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Input 삭제
        </button>
      </div>
    </section>
  );
};

export default UserFormSection;
