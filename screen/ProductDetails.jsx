import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	StatusBar,
	ScrollView,
} from 'react-native';
import React from 'react';
import { assets, COLORS, FONTS, SIZES } from '../constants';
import { CircleButton, FilledButton } from '../components/Buttons';
import { FocusedStatusBar } from '../components';

const ProductDetails = ({ route, navigation }) => {
	const { product } = route.params;

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			<View style={{ width: '100%', height: 373 }}>
				<Image
					source={product.image}
					resizeMode="cover"
					style={{ width: '100%', height: '100%' }}
				/>

				<CircleButton
					imgUrl={assets.left}
					handlePress={() => navigation.goBack()}
					left={15}
					top={StatusBar.currentHeight + 10}
					bg={COLORS.white}
					position="absolute"
				/>

				<CircleButton
					imgUrl={assets.heart}
					right={15}
					top={StatusBar.currentHeight + 10}
					bg={COLORS.white}
					position="absolute"
				/>
			</View>

			<ScrollView style={styles.infoContainer}>
				<Text style={styles.name}>{product.name} </Text>

				<Text style={styles.longName}>{product.longName}</Text>

				<Text style={styles.description}>{product.description}</Text>

				<View style={styles.priceContianer}>
					<Text style={styles.priceHeading}>Pricing: </Text>
					<Text style={styles.price}>$ {product.price} </Text>
				</View>

				<View style={styles.pricingDescription}>
					<Text>{`\u2022`} 50% off for First Timers</Text>
					<Text>{`\u2022`} Free Shipping & Delivery</Text>
					<Text>{`\u2022`} 3-Months Warranty</Text>
				</View>
			</ScrollView>

			<View style={styles.bookBtn}>
				<FilledButton bg={COLORS.primary} minWidth={'80%'}>
					<Text>Add To Cart</Text>
				</FilledButton>
			</View>
		</SafeAreaView>
	);
};

export default ProductDetails;

const styles = StyleSheet.create({
	infoContainer: {
		padding: SIZES.small,
		paddingTop: SIZES.medium,
		maxHeight: 365,
	},
	name: {
		fontFamily: FONTS.bold,
		fontSize: SIZES.large,
		textTransform: 'uppercase',
		color: COLORS.gray,
	},
	longName: {
		fontFamily: FONTS.bold,
		fontSize: SIZES.xlarge - 8,
		textTransform: 'uppercase',
		color: COLORS.primary,
	},
	description: {
		paddingTop: SIZES.base,
		color: COLORS.secondary,
	},
	priceContianer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: SIZES.large + 5,
		paddingHorizontal: SIZES.large,
	},
	pricingDescription: {
		color: COLORS.primary,
		paddingHorizontal: SIZES.large,
	},
	priceHeading: {
		fontFamily: FONTS.bold,
		fontSize: SIZES.xlarge - 10,
		color: COLORS.primary,
	},
	price: {
		backgroundColor: '#fbcfe8',
		color: '#d0206f',
		padding: SIZES.base,
		paddingHorizontal: SIZES.small,
		borderRadius: SIZES.small,
		fontWeight: 'bold',
		fontSize: SIZES.large,
	},
	bookBtn: {
		position: 'absolute',
		bottom: 10,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
