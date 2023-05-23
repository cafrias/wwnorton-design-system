import React, { useCallback } from 'react';
import { Meta } from '@storybook/react';
import {
	Tabs, Tab, TabList, TabPanel, TabPanels,
	TabsProps,
	ControlledTabsProps,
} from '.';
import { Button } from '../Button';

export default {
	title: 'Tabs',
	component: Tabs,
	argTypes: {
		selectedIndex: {
			control: {
				type: 'range', min: 0, step: 1, max: 2,
			},
		},
	},
} as Meta<TabsProps>;

export const Uncontrolled = () => (
	<Tabs defaultSelectedIndex={0}>
		<TabList>
			<Tab>Cats</Tab>
			<Tab>Dogs</Tab>
			<Tab disabled>Horses</Tab>
		</TabList>
		<TabPanels>
			<TabPanel>Cats content</TabPanel>
			<TabPanel>Dogs content</TabPanel>
			<TabPanel>Horses content</TabPanel>
		</TabPanels>
	</Tabs>
);

export const Controlled = ({ selectedIndex }: ControlledTabsProps) => {
	const [selectedTabIndex, setSelectedTabIndex] = React.useState(selectedIndex);
	const onChange = useCallback((index) => {
		setSelectedTabIndex(index);
	}, []);

	return (
		<div>
			<Button onClick={() => setSelectedTabIndex(0)}>Switch to tab 1</Button>
			<Button onClick={() => setSelectedTabIndex(1)}>Switch to tab 2</Button>
			<Button onClick={() => setSelectedTabIndex(2)}>Switch to tab 3</Button>
			<hr />
			<Tabs selectedIndex={selectedTabIndex} onChange={onChange}>
				<TabList>
					<Tab>Cats</Tab>
					<Tab>Dogs</Tab>
					<Tab>Horses</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>Cats content</TabPanel>
					<TabPanel>Dogs content</TabPanel>
					<TabPanel>Horses content</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
};

Controlled.args = {
	selectedIndex: 1,
};
