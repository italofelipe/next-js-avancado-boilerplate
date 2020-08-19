import Main from ".";
import { Story, Meta } from "@storybook/react/types-6-0";
export default {
	title: "Main",
	component: Main,
	args: {
		title: "Default title",
		description: "Default description"
	}
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
