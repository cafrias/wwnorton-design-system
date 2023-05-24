import React from 'react';
import classNames from 'classnames';
import { BaseButton } from '../BaseButton';
import { Icon } from '../Icon';

interface TabScrollButtonProps {
	type: 'left' | 'right';
	onClick: () => void;
}

const BASE_NAME = 'nds-tab-scroll-button';

const styles = {
	base: BASE_NAME,
	contained: `${BASE_NAME}--contained`,
	text: `${BASE_NAME}__text`,
};

export const TabScrollButton = ({ type, onClick }: TabScrollButtonProps) => {
	const text = type === 'left' ? 'Previous' : 'Next';
	const icon = type === 'left' ? 'chevron-left' : 'chevron-right';

	const className = classNames(
		styles.base,
		{
			[styles.contained]: true,
		},
	);

	return (
		<BaseButton className={className} onClick={onClick}>
			<Icon variant={icon} />
			<span className={styles.text}>{text}</span>
		</BaseButton>
	);
};
