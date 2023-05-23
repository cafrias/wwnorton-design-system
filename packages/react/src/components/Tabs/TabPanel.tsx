import React from 'react';
import { TabPanelProps } from './types';
import { useTabId, useTabPanelId, useTabsState } from './context';

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
	({ index, children }, ref) => {
		if (index === undefined) {
			throw new Error('TabPanel must be a child of TabPanels');
		}

		const { selectedTabIndex } = useTabsState();

		const tabId = useTabId(index);
		const tabPanelId = useTabPanelId(index);

		const isHidden = index !== selectedTabIndex;

		return (
			<div
				ref={ref}
				role="tabpanel"
				hidden={isHidden}
				id={tabPanelId}
				aria-labelledby={tabId}
			>
				{children}
			</div>
		);
	},
);
