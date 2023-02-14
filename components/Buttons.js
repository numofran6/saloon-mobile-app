import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants';

export const FilledButton = ({ minWidth, bg, children, ...rest }) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.font,
				paddingHorizontal: SIZES.large,
				borderColor: COLORS.primary,
				borderRadius: SIZES.small,
				backgroundColor: bg,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					color: COLORS.white,
					fontWeight: 'bold',
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export const OutlinedButton = ({ minWidth, children, ...rest }) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.font,
				paddingHorizontal: SIZES.large,
				borderWidth: SIZES.extraSmall,
				borderColor: COLORS.primary,
				borderRadius: SIZES.small,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					fontWeight: 'bold',
					color: COLORS.primary,
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export const TextButton = ({ minWidth, children, ...rest }) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.font,
				paddingHorizontal: SIZES.large,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(150, 150, 150, 0.2)',
			}}
		>
			<Text
				style={{
					fontWeight: '900',
					color: COLORS.primary,
					textTransform: 'uppercase',
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export const AuthButton = ({ minWidth, bg, children, ...rest }) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.large,
				paddingHorizontal: SIZES.large,
				borderColor: COLORS.primary,
				borderTopLeftRadius: SIZES.large + 8,
				borderTopRightRadius: SIZES.large + 8,
				backgroundColor: bg,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					color: COLORS.white,
					fontWeight: 'bold',
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
