import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

export default function App() {
	const addEntry = () => {
		alert('Abrir tela de adicionar lancamento.')
	}

	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 22,
					fontWeight: 'bold',
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				Saldo: $2.102,45
			</Text>
			<Button onPress={addEntry} title="Adicionar"></Button>

			<Text
				style={{
					fontSize: 22,
					fontWeight: 'bold',
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				Categorias
			</Text>

			<FlatList
				data={[
					{ key: 'Alimentacao: $200' },
					{ key: 'Combustivel: $12' },
					{ key: 'Aluguel: $120' },
					{ key: 'Lazer: $250' },
					{ key: 'Outros: $1200' },
				]}
				renderItem={({ item }) => <Text>{item.key}</Text>}
			></FlatList>

			<Text
				style={{
					fontSize: 22,
					fontWeight: 'bold',
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				Ultimos Lancamentos
			</Text>

			<FlatList
				data={[
					{ key: 'Padaria Asa Branca: $10' },
					{ key: 'Supermercado Guanabara: $190' },
					{ key: 'Posto Shell: $190' },
				]}
				renderItem={({ item }) => <Text>{item.key}</Text>}
			></FlatList>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
})
