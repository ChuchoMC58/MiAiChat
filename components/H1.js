import { Text } from "react-native"

const H1 = ({ children }) => {
	return (
		<Text style={{
			fontSize: 24,
			textAlign: 'center',
    	fontWeight: 'bold',
    	margin: 5,
			color: 'hsl(0,100%, 50%)'
		}}>
			{children}   
		</Text> 
	)
}

export default H1