import { SafeAreaView, StyleSheet } from 'react-native';
import { FocusedStatusBar } from '../components';
import MapView, { Marker } from 'react-native-maps';
import { useState } from 'react';

const Map = ({ navigation }) => {
	const [mapRegion, setMapRegion] = useState({
		latitude: 5.694385,
		longitude: -0.029529,
		longitudeDelta: 0.0522,
		latitudeDelta: 0.0021,
	});

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			<MapView style={styles.map} region={mapRegion}>
				<Marker coordinate={mapRegion} title={'Defavoured Saloon'} />
			</MapView>
		</SafeAreaView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '100%',
	},
});
