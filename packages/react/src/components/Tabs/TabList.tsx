import React from 'react';
import classNames from 'classnames';
import { TabListProps, TabProps } from './types';
import { TabScrollButton } from './TabScrollButton';

const BASE_NAME = 'nds-tab-list';

const styles = {
	base: BASE_NAME,
	left: `${BASE_NAME}--left`,
	centered: `${BASE_NAME}--centered`,
};

function useTabListScroll(ref: React.RefObject<HTMLDivElement>, scrollDelta = 100) {
	const moveLeft = React.useCallback(() => {
		if (!ref.current) {
			return;
		}

		// eslint-disable-next-line no-param-reassign
		ref.current.scrollLeft -= scrollDelta;
	}, [ref, scrollDelta]);

	const moveRight = React.useCallback(() => {
		if (!ref.current) {
			return;
		}

		// eslint-disable-next-line no-param-reassign
		ref.current.scrollLeft += scrollDelta;
	}, [ref, scrollDelta]);

	return {
		moveLeft,
		moveRight,
	};
}

export const TabList = ({ align = 'left', children }: TabListProps) => {
	const tabListRef = React.useRef<HTMLDivElement>(null);
	const { moveLeft, moveRight } = useTabListScroll(tabListRef);

	const className = classNames(
		styles.base,
		{
			[styles.left]: align === 'left',
			[styles.centered]: align === 'center',
		},
	);

	return (
		<div style={{ display: 'flex' }}>
			<TabScrollButton type="left" onClick={moveLeft} />
			<div ref={tabListRef} className={className} role="tablist">
				{React.Children.map(children, (child, index: number) => {
					if (!React.isValidElement<TabProps>(child)) {
						return null;
					}

					return React.cloneElement(child, {
						index,
					});
				})}
			</div>
			<TabScrollButton type="right" onClick={moveRight} />
		</div>
	);
};
