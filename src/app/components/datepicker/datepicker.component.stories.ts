import { Meta, StoryObj } from '@storybook/angular';

import { DatepickerComponent } from './datepicker.component';

type ComponentWithCustomControls = DatepickerComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Datepicker',
  component: DatepickerComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Datepicker` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Datepicker: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
