import { useState } from 'react';
import {
	FlatList,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';
import { FocusedStatusBar, ProductsCard } from '../components';
import { assets, COLORS, FONTS, Products, SIZES } from '../constants';

const Shop = ({ navigation }) => {
	const [productsData, setProductsData] = useState(Products);

	const handleSearch = (value) => {
		if (value.length === 0) {
			setProductsData(Products);
		}

		const filteredData = Products.filter((item) =>
			item.name.toLowerCase().includes(value.toLowerCase())
		);

		if (filteredData.length === 0) {
			setProductsData(Products);
		} else {
			setProductsData(filteredData);
		}
	};

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

			<View style={styles.textInputContainer}>
				<View style={styles.textInput}>
					<Image
						source={assets.search}
						resizeMode="contain"
						style={{ width: 20, height: 20, marginRight: SIZES.base }}
					/>
					<TextInput
						placeholder="Search Shop..."
						style={{ flex: 1 }}
						onChangeText={handleSearch}
					/>
				</View>
			</View>

			<View style={styles.products}>
				<FlatList
					data={productsData}
					renderItem={({ item }) => <ProductsCard product={item} />}
					keyExtractor={(item) => item.id}
					numColumns={2}
					showsVerticalScrollIndicator={false}
				/>
			</View>
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
	textInputContainer: {
		backgroundColor: COLORS.primary,
		paddingTop: SIZES.large,
		paddingBottom: SIZES.medium,
		alignItems: 'center',
	},
	textInput: {
		width: '90%',
		borderRadius: SIZES.font,
		backgroundColor: COLORS.gray,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: SIZES.font,
		paddingVertical: SIZES.small - 2,
	},
	products: {
		flex: 2,
		marginHorizontal: 'auto',
		width: '100%',
		backgroundColor: '#9ca3af',
	},
});
