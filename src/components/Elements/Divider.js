import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { variant, space, layout, color, compose } from 'styled-system';

const Divider = styled(Box)(
	compose(space, layout, color),
	variant({
		prop: 'variant',
		variants: {
			vertical: {
				background: '#3c87aa',
				width: '1px',
				height: '85%',
				ml: [0, 1, 2],
				mr: [0, 1, 2],
			},
			horizontal: {
				background: '#3D5C8A',
				width: '85%',
				height: '1px',
				mt: [0, 1, 2],
				mb: [0, 1, 2],
				margin: 'auto',
			},
		},
	})
);

export const ThemeDivider = (props) => {
	return <Divider {...props} />;
};
