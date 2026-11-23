import type { Decorator } from '@storybook/react-vite';

export const Arabic: Decorator = (Story) => (
  <div lang="ar" dir="rtl">
    <Story />
  </div>
);
