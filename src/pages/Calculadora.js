import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from './../componentes/container';
import Header from './../componentes/header';
import Body from './../componentes/body';
import Input from './../componentes/input';

const Calculadora = () => {
  const [gasolina, setGasolina] = useState('');
  const [etanol, setEtanol] = useState('');
  const [resposta, setResposta] = useState('');

  const handleCalcular = () => {
    if (!gasolina || gasolina <= 0 || !etanol || etanol <= 0) {
      Alert.alert(
        'Atenção!',
        'Obrigatório informar o valor da gasolina e do etanol.'
      );
    } else {
      let pct = Math.round((etanol / gasolina) * 100);
      if (pct < 70) {
        setResposta(pct + '% Recomendamos o uso do Etanol');
      } else {
        setResposta(pct + '% Recomendamos o uso da Gaolina');
      }
    }
  };

  return (
    <Container>
      <Header title={'Calculadora Flex'} />
      <Body>
        <Input
          label="Preço da gasolina"
          value={gasolina}
          onChangeText={(text) => setGasolina(text)}
        />

        <Input
          label="Preço do etanol"
          value={etanol}
          onChangeText={(text) => setEtanol(text)}
        />

        <Button mode="contained" onPress={handleCalcular}>
          Calcular
        </Button>
        <Text style={styles.text}>{resposta}</Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 8,
  },
});

export default Calculadora;