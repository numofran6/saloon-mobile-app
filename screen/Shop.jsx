import {
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { FocusedStatusBar } from '../components';
import { assets, COLORS, FONTS, SIZES } from '../constants';

const Shop = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			<View style={styles.heading}>
				<Image
					source={assets.logo}
					resizeMode="contain"
					style={{ width: 40, height: 40 }}
				/>
			</View>

			<Text>Shop</Text>
		</SafeAreaView>
	);
};

export default Shop;

const styles = StyleSheet.create({
	heading: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: SIZES.small,
		paddingTop: StatusBar.currentHeight + SIZES.medium,
		paddingBottom: SIZES.medium,
		backgroundColor: COLORS.primary,
	},
	headingSubText: {
		fontFamily: FONTS.bold,
		color: COLORS.white,
		fontSize: SIZES.medium,
		textTransform: 'uppercase',
	},
});
