import React, {
	useMemo, useState,
} from 'react';
import {
	ControlledTabsProps, TabsState, UncontrolledTabsProps,
} from './types';
import { useId } from '../../utilities';

export const TabsContext = React.createContext<TabsState | null>(null);

export function useInitUncontrolledTabsState({
	idPrefix: userSetIdPrefix,
	defaultSelectedIndex,
}: UncontrolledTabsProps): TabsState {
	const generatedIdPrefix = useId() as string;
	const idPrefix = userSetIdPrefix || generatedIdPrefix;

	const [selected, setSelected] = useState(defaultSelectedIndex || 0);

	const state: TabsState = useMemo(() => ({
		idPrefix,
		selectedTabIndex: selected,
		setSelectedTabIndex: setSelected,
	}), [idPrefix, selected, setSelected]);

	return state;
}

export function useInitControlledTabsState({
	idPrefix: userSetIdPrefix,
	onChange,
	selectedIndex,
}: ControlledTabsProps): TabsState {
	const generatedIdPrefix = useId() as string;
	const idPrefix = userSetIdPrefix || generatedIdPrefix;

	const state: TabsState = useMemo(() => ({
		idPrefix,
		selectedTabIndex: selectedIndex,
		setSelectedTabIndex: onChange,
	}), [idPrefix, onChange, selectedIndex]);

	return state;
}

export function useTabsState() {
	const result = React.useContext(TabsContext);
	if (!result) {
		throw new Error('TabsContext not initialized');
	}

	return result;
}

export function useTabId(index: number) {
	const { idPrefix } = useTabsState();
	return `${idPrefix}-tab-${index}`;
}

export function useTabPanelId(index: number) {
	const { idPrefix } = useTabsState();
	return `${idPrefix}-tab-panel-${index}`;
}
