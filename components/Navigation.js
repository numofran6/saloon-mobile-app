import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { assets, COLORS, SIZES } from '../constants';
import { NavButton } from './Buttons';

const Navigation = () => {
	return (
		<View style={styles.container}>
			<View style={styles.navbar}>
				<NavButton
					imgUrl={assets.home}
					android_ripple={{ borderless: true, radius: 50 }}
				/>

				<NavButton
					imgUrl={assets.pin}
					android_ripple={{ borderless: true, radius: 50 }}
				/>

				<NavButton
					imgUrl={assets.bag}
					android_ripple={{ borderless: true, radius: 50 }}
				/>

				<NavButton
					imgUrl={assets.user}
					android_ripple={{ borderless: true, radius: 50 }}
				/>
			</View>
		</View>
	);
};

export default Navigation;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
	},
	navbar: {
		flexDirection: 'row',
		backgroundColor: COLORS.primary,
		width: '100%',
		justifyContent: 'space-around',
		paddingVertical: SIZES.large + 2,
	},
	iconBehave: {
		padding: 14,
	},
});
