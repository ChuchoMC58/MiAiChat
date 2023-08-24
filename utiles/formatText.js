export default function removeNL(texto){
	const newTexto = texto.replace(/[\r\n]/gm, '')
	return newTexto.replace(/\s+/g, ' ')
}

