import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

import correos from "./screens/correos";
import ResumenDeObras from "./screens/ResumenDeObras";
import Inicio from "./screens/Inicio";
import DifsEstilosdeEscrituras from "./screens/DifsEstilosdeEscrituras";

const Stack = createNativeStackNavigator()

const topBar = Constants.statusBarHeight

export default function Navegador(){
	return( 
		<Stack.Navigator>
			<Stack.Screen name='Inicio' component={Inicio}/> 
			<Stack.Screen name='Correos' component={correos} />
			<Stack.Screen name='DifsEstilosdeEscrituras' component={DifsEstilosdeEscrituras} />
			<Stack.Screen name='ResumenDeObras' component={ResumenDeObras} />
		</Stack.Navigator>	
	)
}

const styles = StyleSheet.create({
	centro:{
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: topBar,		
		backgroundColor: 'grey',
    borderWidth: 5,
		height:600,
	},
	texto: {
		borderWidth: 3,
		borderColor: 'red',
		margin: 5
	}
})