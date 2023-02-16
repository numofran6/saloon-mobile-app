import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const ProductsCard = ({ product }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('product-details', { product })}
			style={styles.container}
		>
			<View style={styles.imageContainer}>
				<Image source={product.image} resizeMode="cover" style={styles.image} />
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.infoName}>{product.name}</Text>

				<Text style={styles.price}>$ {product.price} </Text>
			</View>
		</TouchableOpacity>
	);
};

export default ProductsCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		borderRadius: SIZES.medium,
		marginTop: SIZES.large,
		margin: SIZES.base,
		flex: 1,
		maxWidth: '50%',
		alignItems: 'center',
		...SHADOWS.dark,
	},
	imageContainer: {
		width: '100%',
		height: 200,
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: SIZES.medium,
	},
	infoContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		paddingHorizontal: SIZES.small,
		paddingVertical: SIZES.base,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.medium,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	infoName: {
		fontWeight: 'bold',
		color: COLORS.primary,
		fontSize: SIZES.base + 4,
	},
	price: {
		backgroundColor: '#fbcfe8',
		color: '#d0206f',
		padding: SIZES.base,
		paddingHorizontal: SIZES.base,
		borderRadius: SIZES.small,
		fontWeight: 'bold',
		fontSize: SIZES.base + 3,
	},
});
