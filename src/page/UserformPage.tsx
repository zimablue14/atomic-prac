import { useState } from 'react';

import UserFormTemplate from '../components/template/UserFormTemplate';
import type { ElementType } from '../types';

const initialFormElements: ElementType[] = [
  {
    tagName: 'Input',
    attr: { label: '이름', placeholder: '홍길동' },
  },
  {
    tagName: 'Group',
    attr: { label: '주소 입력' },
    children: [
      {
        tagName: 'Input',
        attr: { label: '시/도', placeholder: '서울특별시' },
      },
      {
        tagName: 'Input',
        attr: { label: '도로명 주소', placeholder: '세종대로 110' },
      },
    ],
  },
  {
    tagName: 'Checkbox',
    attr: { label: '이메일 수신 동의' },
  },
];

export default function UserFormPage() {
  const [elements, setElements] = useState(initialFormElements);

  const addInput = () => {
    setElements((prev) => [
      ...prev,
      {
        tagName: 'Input',
        attr: {
          label: `이름 ${prev.length + 1}`,
          placeholder: '홍길동',
        },
      },
    ]);
  };

  const deleteInput = () => {
    setElements((prev) => {
      const reversed = [...prev].reverse();
      const index = reversed.findIndex((elem) => elem.tagName === 'Input');
      if (index == -1) return prev;

      const targetIdx = prev.length - 1 - index;
      return [...prev.slice(0, targetIdx), ...prev.slice(targetIdx + 1)];
    });
  };

  return <UserFormTemplate elements={elements} onAddInput={addInput} onDeleteInput={deleteInput} />;
}
