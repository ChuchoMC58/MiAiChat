import { Text } from "react-native"

const H2 = ({ children }) => {
	return (
		<Text style={{
			fontSize: 20, 
			fontWeight: 'bold',
			margin:5,
			color: 'hsl(240, 80%, 70%)'
		}}>
			{children}   
		</Text> 
	)
}

export default H2