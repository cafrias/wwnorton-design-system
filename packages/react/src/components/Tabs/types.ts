import React from 'react';

export type TabsProps = ControlledTabsProps | UncontrolledTabsProps;

export type ControlledTabsProps = React.PropsWithChildren<{
	selectedIndex: number;
	onChange: (selectedIndex: number) => void;
	idPrefix?: string;
}>;

export type UncontrolledTabsProps = React.PropsWithChildren<{
	defaultSelectedIndex?: number;
	idPrefix?: string;
}>;

export type TabListProps = React.ComponentPropsWithRef<'div'> & {
	isSelected?: boolean;
	onSelect?: (index: number) => void;
};

export type TabProps = React.PropsWithChildren<{
	disabled?: boolean;
} & Indexed>;

export type TabPanelProps = React.ComponentPropsWithRef<'div'> & Indexed;

export type TabPanelsProps = { children?: React.ReactNode };

interface Indexed {
	/** This index is used to link the Tabs and the TabPanels */
	index?: number;
}

export interface TabsState {
	idPrefix: string;
	selectedTabIndex: number;
	setSelectedTabIndex: (index: number) => void;
}
