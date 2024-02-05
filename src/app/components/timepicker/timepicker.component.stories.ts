import { Meta, StoryObj } from '@storybook/angular';

import { TimepickerComponent } from './timepicker.component';

type ComponentWithCustomControls = TimepickerComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Timepicker',
  component: TimepickerComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Timepicker` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Timepicker: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
