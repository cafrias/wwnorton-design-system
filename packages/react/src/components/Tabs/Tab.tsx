import React, { useCallback } from 'react';
import classNames from 'classnames';
import { BaseButton } from '../BaseButton';
import { TabProps } from './types';
import { useTabId, useTabPanelId, useTabsState } from './context';

const BASE_NAME = 'nds-tab';

const styles = {
	base: BASE_NAME,
	contained: `${BASE_NAME}--contained`,
	line: `${BASE_NAME}--line`,
	selected: 'selected',
};

export const Tab = ({
	index,
	children,
	disabled,
}: TabProps) => {
	if (index === undefined) {
		throw new Error('Tab must be a child of TabList');
	}

	const state = useTabsState();

	const isSelected = index === state.selectedTabIndex;

	const onClick = useCallback(() => {
		state.setSelectedTabIndex(index);
	}, [index, state]);

	const tabId = useTabId(index);
	const panelId = useTabPanelId(index);

	const className = classNames(BASE_NAME, {
		[styles.contained]: state.variant === 'contained',
		[styles.line]: state.variant === 'line',
		[styles.selected]: isSelected,
	});

	return (
		<BaseButton
			className={className}
			type="button"
			onClick={onClick}
			role="tab"
			id={tabId}
			aria-controls={panelId}
			aria-selected={isSelected}
			tabIndex={isSelected ? 0 : -1}
			disabled={disabled}
		>
			{children}
		</BaseButton>
	);
};
