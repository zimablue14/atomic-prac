/* eslint-disable @typescript-eslint/no-explicit-any */
export type ElementType = {
  tagName: string;
  attr: any;
  children?: ElementType[];
};
