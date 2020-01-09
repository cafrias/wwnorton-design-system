import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, text, select, boolean,
} from '@storybook/addon-knobs';
import '@nds/core/src/components/disclosure/index.scss';
import { Disclosure, DisclosureVariant } from '.';
import BaseSummary from './BaseDetails/BaseSummary';

export default {
	title: 'Disclosure',
	component: Disclosure,
	decorators: [withKnobs],
};

const variantOptions = {
	Default: undefined,
	Panel: 'panel',
};

const contents = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit, quibusdam culpa, consequuntur quos voluptate esse explicabo ipsa perspiciatis illo molestias dolorem atque praesentium modi saepe hic suscipit, deserunt debitis.';

const { defaultProps } = Disclosure;

export const Default = (): JSX.Element => (
	<Disclosure
		summary={text('Summary', 'More information')}
		variant={select('Variant', variantOptions, undefined) as DisclosureVariant}
		animate={boolean('Animate', defaultProps.animate)}
		onToggle={action('onToggle')}
	>
		<p>{text('Contents', contents)}</p>
	</Disclosure>
);

export const open = (): JSX.Element => (
	<Disclosure
		summary={text('Summary', 'More information')}
		variant={select('Variant', variantOptions, undefined) as DisclosureVariant}
		animate={boolean('Animate', defaultProps.animate)}
		onToggle={action('onToggle')}
		open
	>
		<p>{text('Contents', contents)}</p>
	</Disclosure>
);

export const withBaseSummary = (): JSX.Element => (
	<Disclosure
		summary={<BaseSummary className="disclosure__summary">Base summary</BaseSummary>}
		variant={select('Variant', variantOptions, undefined) as DisclosureVariant}
		animate={boolean('Animate', defaultProps.animate)}
		onToggle={action('onToggle')}
	>
		<p>{text('Contents', contents)}</p>
	</Disclosure>
);

export const withHTMLSummary = (): JSX.Element => (
	<Disclosure
		summary={<summary className="disclosure__summary">HTML summary</summary>}
		variant={select('Variant', variantOptions, undefined) as DisclosureVariant}
		animate={boolean('Animate', defaultProps.animate)}
		onToggle={action('onToggle')}
	>
		<p>{text('Contents', contents)}</p>
	</Disclosure>
);
