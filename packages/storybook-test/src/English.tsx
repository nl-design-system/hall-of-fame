import type { Decorator } from '@storybook/react-vite';

export const English: Decorator = (Story) => (
  <div lang="en" dir="ltr">
    <Story />
  </div>
);
