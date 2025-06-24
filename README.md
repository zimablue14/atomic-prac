# Matrix Form Example

이 프로젝트는 Atomic Design 패턴에 기반하여, 다양한 폼 요소를 구성하고 렌더링하는 예시입니다.  
`Matrix` 컴포넌트를 통해 동적으로 `Input`, `Checkbox`, `Group` 형태의 필드를 표현할 수 있습니다.

## 🔧 기술 스택

- React
- TypeScript
- React Router (v6 이상)
- Tailwind CSS

## 🧱 프로젝트 구조

```plaintext
src/
├── App.tsx                     # 라우팅 설정
│
├── pages/
│   └── UserFormPage.tsx       # formElements 데이터를 정의하고 전달
│
├── components/
│   ├── atom/                  # 가장 기본 단위 컴포넌트 (Input, Checkbox 등)
│   ├── molecule/              # 기본 단위들의 조합 (예: FormContainer)
│   ├── organism/              # 하나의 섹션을 구성 (UserFormSection)
│   └── template/              # 전체 페이지 템플릿 (UserFormTemplate, Matrix)
│
└── types.ts                   # ElementType 타입 정의
```

## ✨ 주요 기능

### 1. 동적 렌더링

`formElements` 배열만 정의하면 다양한 입력 UI를 렌더링할 수 있습니다.

```ts
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
        attr: { label: '시/도' },
      },
      {
        tagName: 'Input',
        attr: { label: '도로명 주소' },
      },
    ],
  },
  {
    tagName: 'Checkbox',
    attr: { label: '이메일 수신 동의' },
  },
];
```

### 2. 컴포넌트 등록 방식

`Matrix` 컴포넌트 내 `convertStrToComponent` 함수를 통해 문자열 기반으로 컴포넌트를 등록합니다.

```ts
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
```

## 🧩 확장 가능성

- `Select`, `Textarea` 등 새 컴포넌트를 등록해 확장할 수 있습니다.
- `Group`은 중첩도 가능하며, 다단 폼 구성으로 응용할 수 있습니다.
- JSON 기반 폼 구성기로 발전시킬 수도 있습니다.

## 🛠 실행 방법

```bash
# 설치
npm install

# 실행
npm run dev
```

## 📁 참고

- Atomic Design 패턴 구조로 구성
- React Router v6 이상 기반
- Tailwind CSS로 스타일링
