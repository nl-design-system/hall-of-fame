import type { Decorator } from '@storybook/react-vite';

export const storyRootClassname = 'voorbeeld-theme';

export const StoryRoot: Decorator = (Story) => (
  <div className={storyRootClassname}>
    <Story />
  </div>
);
