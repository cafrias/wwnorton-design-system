import React from 'react';
import { TabPanelProps, TabPanelsProps } from './types';

export const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>((props, ref) => (
	<div ref={ref}>
		{React.Children.map(props.children, (child, index: number) => {
			if (!React.isValidElement<TabPanelProps>(child)) {
				return null;
			}

			return React.cloneElement(child, { index });
		})}
	</div>
));
