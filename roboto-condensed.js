import React, { useEffect, useState} from "react";
import { Text, View, StyleSheet } from 'react-native'
import * as Font from 'expo-font'

const RobotoCondensed = () => {

	const [fontLoaded, setFontLoaded] = useState(false)

	useEffect(() => { 
		async function loadFont(){
			await Font.loadAsync({
				'roboto-condensed': require('./assets/fonts/RobotoCondensed-Light.ttf')
			}) 
		} 
		loadFont();
	}, []) 
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customText: {
    fontFamily: "roboto-condensed", // Use the same name you used in Font.loadAsync
    fontSize: 30,
		fontWeight: "bold"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); */

export default RobotoCondensed