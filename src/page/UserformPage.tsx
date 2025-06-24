import UserFormTemplate from '../components/template/UserFormTemplate';
import type { ElementType } from '../types';

const formElements: ElementType[] = [
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
  const elements = formElements;

  return <UserFormTemplate elements={elements} />;
}
