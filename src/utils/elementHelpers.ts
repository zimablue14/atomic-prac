import type { SectionType } from '../types';

export const addInput = (sections: SectionType[], sectionId: string): SectionType[] => {
  return sections.map((section) => {
    if (section.id !== sectionId) return section;

    const inputCount = section.elements.filter((el) => el.tagName === 'Input').length;

    return {
      ...section,
      elements: [
        ...section.elements,
        {
          tagName: 'Input',
          attr: {
            label: `이름 ${inputCount + 1}`,
            placeholder: '홍길동',
          },
        },
      ],
    };
  });
};

export const deleteInput = (sections: SectionType[], sectionId: string): SectionType[] => {
  return sections.map((section) => {
    if (section.id !== sectionId) return section;

    const reversed = [...section.elements].$reverse();
    const index = reversed.findIndex((el) => el.tagName === 'Input');
    if (index === -1) return section;

    const targetIdx = section.elements.length - 1 - index;
    return {
      ...section,
      elements: [...section.elements.slice(0, targetIdx), ...section.elements.slice(targetIdx + 1)],
    };
  });
};
