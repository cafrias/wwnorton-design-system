import React from 'react';
import BaseSummary from '../BaseSummary';
import { isElement } from '../../utilities/helpers';

export type DetailsToggleEvent = React.SyntheticEvent<HTMLDetailsElement, Event>;

export interface BaseDetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
	/** The contents of the `<summary>` element or an actual `<summary>` element. */
	summary?: string | JSX.Element;
	/**
	 * A className to be applied to the `<summary>` element.
	 * If the `summary` prop is an actual `<summary>` element, this will be ignored.
	 */
	summaryClass?: string;
	/**
	 * A polyfill of the `ontoggle` event, which _does_ work but doesn't currently
	 * exist in the `React.DetailsHTMLAttributes<HTMLDetailsElement>` definition.
	 */
	onToggle?: (e: React.SyntheticEvent<HTMLDetailsElement, Event>) => void;
}

const BaseDetails = React.forwardRef<HTMLDetailsElement, BaseDetailsProps>(({
	summary,
	summaryClass,
	open = false,
	children,
	onToggle,
	...attributes
}: BaseDetailsProps, ref) => {
	const [isOpen, setOpen] = React.useState(open);
	React.useEffect(() => setOpen(open), [open]);
	React.useEffect(() => {
		const { current } = ref as React.RefObject<HTMLDetailsElement>;
		if (onToggle && current) {
			current.addEventListener('toggle', onToggle);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const Summary = (content?: JSX.Element | string): JSX.Element => {
		if (isElement(content, 'summary')) return content;
		return <BaseSummary className={summaryClass}>{ content || 'Details' }</BaseSummary>;
	};

	return (
		<details ref={ref} open={isOpen} {...attributes}>
			{ Summary(summary) }
			{ children }
		</details>
	);
});

export default BaseDetails;
