import {View, Text, Button} from 'react-native'

export default function Inicio({navigation}){
	return(
		<View>
			<Button
				title='Resumen de Obras'
				onPress={ () => {
					navigation.navigate('ResumenDeObras')
				}}
			/>

			<Button
				title='Estilos de Escrituras'
				onPress={ () => {
					navigation.navigate('DifsEstilosdeEscrituras')
				}}
			/>
		</View>
	)
}

