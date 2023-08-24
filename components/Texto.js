import { Text } from "react-native"

function Texto({ children }){
	return(
		<Text	style={{
			textAlign:'justify', 
			marginLeft: 7, marginRight: 7, marginBottom: 7,
			fontSize: 15
		}}>
			{children}
		</Text>
	)
}

export default Texto