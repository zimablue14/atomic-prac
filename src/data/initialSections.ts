import { v4 as uuid } from 'uuid';

import type { SectionType } from '../types';

export const initialSections: SectionType[] = [
  {
    id: uuid(),
    title: '기본 정보',
    elements: [
      { tagName: 'Input', attr: { label: '이름', placeholder: '홍길동' } },
      { tagName: 'Checkbox', attr: { label: '이메일 수신 동의' } },
    ],
  },
  {
    id: uuid(),
    title: '주소 입력',
    elements: [
      { tagName: 'Input', attr: { label: '시/도', placeholder: '서울특별시' } },
      { tagName: 'Input', attr: { label: '도로명 주소', placeholder: '세종대로 110' } },
    ],
  },
];
