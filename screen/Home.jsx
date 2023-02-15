import { useState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	Image,
	StyleSheet,
	TextInput,
	FlatList,
} from 'react-native';
import { FocusedStatusBar, ServicesCard } from '../components';
import { assets, COLORS, FONTS, NFTData, SIZES } from '../constants';

const Home = ({ navigation }) => {
	const [servicesData, setServicesData] = useState(NFTData);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar backgroundColor={COLORS.primary} />

			<View>
				<View style={styles.heading}>
					<View>
						<Text style={styles.headingText}>Hello, Lois</Text>
						<Text style={styles.headingSubText}>
							Welcome to Defavoured Saloon
						</Text>
					</View>

					<Image
						source={assets.logo}
						resizeMode="contain"
						style={{ width: 50, height: 50 }}
					/>
				</View>

				<View style={styles.textInputContainer}>
					<View style={styles.textInput}>
						<Image
							source={assets.search}
							resizeMode="contain"
							style={{ width: 20, height: 20, marginRight: SIZES.base }}
						/>
						<TextInput placeholder="Search" style={{ flex: 1 }} />
					</View>
				</View>
			</View>

			<View style={styles.services}>
				<FlatList
					data={servicesData}
					renderItem={({ item }) => <ServicesCard service={item} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	heading: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: SIZES.small,
		paddingVertical: SIZES.medium,
		backgroundColor: COLORS.primary,
	},
	headingText: {
		fontFamily: FONTS.bold,
		fontSize: SIZES.xlarge - 5,
		color: COLORS.white,
	},
	headingSubText: {
		fontFamily: FONTS.bold,
		color: COLORS.gray,
		fontSize: SIZES.small,
	},
	textInputContainer: {
		backgroundColor: COLORS.primary,
		paddingTop: SIZES.xlarge,
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
	services: {
		marginHorizontal: SIZES.base,
	},
});
