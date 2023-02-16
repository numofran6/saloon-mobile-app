import {
	FlatList,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { FocusedStatusBar, ProfileCard } from '../components';
import { assets, COLORS, FONTS, ProfileDetials, SIZES } from '../constants';

const Profile = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			<View style={{ width: '100%', height: 280 }}>
				<Image
					source={assets.hairModel}
					resizeMode="cover"
					style={{ width: '100%', height: '100%' }}
				/>

				<View style={styles.userInfo}>
					<Text style={styles.name}>Lois Numo</Text>
					<Text style={styles.email}>loisnumo@gmail.com</Text>
				</View>
			</View>

			<View style={styles.profileOptionsContainer}>
				<FlatList
					data={ProfileDetials}
					renderItem={({ item }) => <ProfileCard item={item} />}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	userInfo: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		alignItems: 'center',
		paddingVertical: SIZES.medium,
	},
	name: {
		fontFamily: FONTS.bold,
		fontSize: SIZES.xlarge,
		color: '#f7d1e2',
	},
	email: {
		color: '#d1d5db',
		fontFamily: FONTS.bold,
	},
	profileOptionsContainer: {
		paddingHorizontal: SIZES.medium,
		flex: 1,
	},
});
