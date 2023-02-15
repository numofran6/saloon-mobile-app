import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const ServicesCard = ({ service }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('details', { service })}
			style={styles.container}
		>
			<View style={styles.imageContainer}>
				<Image source={service.image} resizeMode="cover" style={styles.image} />
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.infoName}>{service.name}</Text>

				<Text style={styles.price}>$ {service.price} </Text>
			</View>
		</TouchableOpacity>
	);
};

export default ServicesCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		borderRadius: SIZES.medium,
		marginTop: SIZES.large,
		margin: SIZES.base,
		...SHADOWS.dark,
	},
	imageContainer: {
		width: '100%',
		height: 170,
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
		paddingHorizontal: SIZES.medium,
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
	},
	price: {
		backgroundColor: '#fbcfe8',
		color: '#d0206f',
		padding: SIZES.base,
		paddingHorizontal: SIZES.small,
		borderRadius: SIZES.small,
		fontWeight: 'bold',
	},
});
