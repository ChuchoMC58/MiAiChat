import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Navegador from './Navegador'

export default function App() {
  return (
		<NavigationContainer> 
			<Navegador />
		</NavigationContainer> 
  );
}
