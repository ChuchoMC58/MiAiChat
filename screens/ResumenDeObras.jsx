import {View, Text, Button, StyleSheet} from 'react-native'
import { infoResumenObras } from '../info/infoResumenObras'
import removeNL from '../utiles/formatText'

const newIntroduccion = infoResumenObras.introduccion.replace(/[\r\n]/gm, '')

export default function ResumenDeObras({navigation}){
	return( 
		<View style={{alignItems:'center'}}> 
			<Text style={styles.titulo}>Resume lo que desees</Text>
			<Text style={styles.dequeva}> 
				{newIntroduccion}
			</Text>
			<H1>Resumiendo Obras</H1>
			<Text> 
				{removeNL(infoResumenObras.resumenDeObras)} 
			</Text> 
			<H1>Resumiendo Grandes cantidades de texto</H1>
			<Text>
				{removeNL(infoResumenObras.tldr)}
			</Text>
		
		</View>
	)
}

const styles = StyleSheet.create({
	dequeva: {
		borderWidth: 3,
		borderColor: 'red',
		margin: 5,
		padding: 10
	},
	heading: {
		fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
	},
	titulo: { 
		fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
		color: 'red'
	}
})

const H1 = ({ children }) => {
	return (
		<Text style={styles.heading}>
			{children}
		</Text>
	)
}
