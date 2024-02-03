import { Meta, StoryObj } from '@storybook/angular';

import { NewEventComponent } from './new-event.component';

type ComponentWithCustomControls = NewEventComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/New Event',
  component: NewEventComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `NewEvent` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const NewEvent: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
