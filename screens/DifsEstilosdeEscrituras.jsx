import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'

import { infoEscrituras } from '../info/estilosdeEscrituras'
import formatText from '../utiles/formatText'
import RobotoCondensed from '../roboto-condensed'
import H1 from '../components/H1'
import H2 from '../components/H2'
import Texto from '../components/Texto'

export default function DifsEstilosdeEscrituras(){
	const [fontsLoaded, setFontsLoaded] = useState(false)

	useEffect(() => {
		if(!fontsLoaded){
			loadFont()
		}
	})

	const loadFont = async () => {
		await Font.loadAsync({
			'Raleway': require('../assets/fonts/Raleway-Italic-VariableFont_wght.ttf')
		})
		setFontsLoaded(true)
	}

	if(!fontsLoaded){
		return(
			<Text>Loading...</Text>
		)
	}

	return ( 
		<View style={{flex:1}}> 
			<ScrollView> 
				<H1>CREA ESCRITURAS GENIALES</H1> 
				<Text style={styles.dequeva}> 
					{formatText(infoEscrituras.intro)} 
				</Text>
			
				<H2>ESCRITURA FORMAL</H2>
				<Texto>
					{formatText(infoEscrituras.formal)} 
				</Texto>
				<Image 
					source={require('../imgs/medioAmbienteFormal.png')}
					style={styles.img}
					resizeMode='stretch' 
				/>

				<H2>ESCRITURA INFORMAL</H2>
				<Texto>{formatText(infoEscrituras.informal)}</Texto>
				<Image 
					source={require('../imgs/medioAmbienteInformal.png')}
					style={styles.img}
					resizeMode='stretch'
				/>

				<H2>COPIANDO EL ESTILO DE UNA PERSONA CELEBRE</H2>
				<Texto>{formatText(infoEscrituras.celebre)}</Texto>
				<Image 
					source={require('../imgs/medioAmbienteFrancoE.png')}
					style={styles.img}
					resizeMode='stretch'
				/>

				<H2>COPIA TU ESTILO</H2>
				<Texto>{formatText(infoEscrituras.tuEstilo)}</Texto>
				<Image 
					source={require('../imgs/copiaTuEstiloEmail1.png')}
					style={{
						width: 350, height: 250, 
						marginBottom: 4,
						alignSelf: 'center'
					}}
					resizeMode='stretch' 
				/> 
				<Image 
					source={require('../imgs/copiaTuEstiloEmail2.png')}
					style={{
						width: 350, height: 250, 
						marginBottom: 4,
						alignSelf: 'center'
					}}
					resizeMode='stretch' 
				/> 
				<Image 
					source={require('../imgs/copiaTuEstiloEmailRespuesta.png')}
					style={styles.img} 
					resizeMode='stretch'
				/>

			</ScrollView>
		</View> 
	)
}

const styles = StyleSheet.create({
	dequeva: {
		borderWidth: 3, 
		borderColor: 'black',
		margin: 5,
		padding: 10,
		justifyContent: 'flex-end',
		fontFamily: 'Raleway',
		fontSize: 20
	},
	img: {
		width: 350, 
		height: 400,
	 	alignSelf:'center',
		margin: 5,
		borderWidth: 2,
		borderColor: 'red',
	}
})





