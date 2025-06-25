export type ElementType = {
  tagName: 'Input' | 'Checkbox' | 'Group';
  attr: {
    label: string;
    placeholder?: string;
  };
  children?: ElementType[];
};

export type SectionType = {
  id: string;
  title: string;
  elements: ElementType[];
};
