import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Shop from './Shop';
import Profile from './Profile';
import { COLORS, SIZES } from '../constants';
import Map from './Map';

const Tab = createBottomTabNavigator();

// Routes
const home = 'home';
const location = 'location';
const shop = 'shop';
const profile = 'profile';

const Main = () => {
	return (
		<Tab.Navigator
			initialRouteName={home}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let rn = route.name;

					if (rn === home) {
						iconName = focused ? 'home' : 'home-outline';
					} else if (rn === location) {
						iconName = focused ? 'location' : 'location-outline';
					} else if (rn === shop) {
						iconName = focused ? 'cart' : 'cart-outline';
					} else if (rn === profile) {
						iconName = focused ? 'person' : 'person-outline';
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
				headerShown: false,
				tabBarActiveTintColor: COLORS.white,
				tabBarInactiveTintColor: COLORS.gray,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: COLORS.primary,
					height: SIZES.xxlarge + 10,
				},
			})}
		>
			<Tab.Screen name={home} component={Home} />
			<Tab.Screen name={location} component={Map} />
			<Tab.Screen name={shop} component={Shop} />
			<Tab.Screen name={profile} component={Profile} />
		</Tab.Navigator>
	);
};

export default Main;
