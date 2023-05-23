import React from 'react';
import { TabListProps, TabProps } from './types';

const BASE_NAME = 'nds-tab-list';

const styles = {
	base: BASE_NAME,
};

export const TabList = ({ children }: TabListProps) => (
	<div className={styles.base} role="tablist">
		{React.Children.map(children, (child, index: number) => {
			if (!React.isValidElement<TabProps>(child)) {
				return null;
			}

			return React.cloneElement(child, {
				index,
			});
		})}
	</div>
);
