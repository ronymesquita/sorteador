import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [numerosAleatorios, setNumerosAleatorios] = useState(new Set())
  const sortearNumeros = () => {
    let numeros = new Set()

    while (numeros.size < 6) {
      const numeroAleatorio = Math.random() * 60 + 1

      numeros.add(numeroAleatorio.toFixed())
    }

    setNumerosAleatorios(numeros)
  }

  const textos = []
  for (const numeroAleatorio of numerosAleatorios) {
    textos.push(
      <Text
        key={numeroAleatorio}
        style={{
          minWidth: '4vw',
          textAlign: 'center',
          border: '1px solid black',
          borderRadius: '.5rem',
          padding: '.5rem',
          margin: '.5rem',
          transform: ''
        }}
      >
        {numeroAleatorio}
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: '1.5rem'
        }}
      >Sorteador de Números</Text>

      <View style={{ height: '1vh' }} />

      <View style={numerosStyle.container}>
        {textos}
      </View>

      <View style={{ height: '1vh' }} />

      <Button
        title="Sortear"
        onPress={() => sortearNumeros()} />
    </View>
  );
}

const numerosStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
