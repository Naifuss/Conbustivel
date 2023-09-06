import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class CalculadoraCombustivel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      precoLitro: '',
      quantidadeAbastecida: '',
      quilometrosPercorridos: '',
      resultado: 0,
    };
  }

  calcularCustoCombustivel = () => {
    const { precoLitro, quantidadeAbastecida, quilometrosPercorridos } = this.state;

    if (precoLitro && quantidadeAbastecida && quilometrosPercorridos) {
      const custo = (precoLitro * quantidadeAbastecida) / quilometrosPercorridos;
      this.setState({ resultado: custo.toFixed(2) });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Preço por Litro:</Text>
        <TextInput
          onChangeText={(precoLitro) => this.setState({ precoLitro })}
          value={this.state.precoLitro}
          keyboardType="numeric"
          placeholder="Digite o preço por litro"
        />

        <Text>Quantidade Abastecida (litros):</Text>
        <TextInput
          onChangeText={(quantidadeAbastecida) => this.setState({ quantidadeAbastecida })}
          value={this.state.quantidadeAbastecida}
          keyboardType="numeric"
          placeholder="Digite a quantidade abastecida"
        />

        <Text>Quilômetros Percorridos:</Text>
        <TextInput
          onChangeText={(quilometrosPercorridos) => this.setState({ quilometrosPercorridos })}
          value={this.state.quilometrosPercorridos}
          keyboardType="numeric"
          placeholder="Digite os quilômetros percorridos"
        />

        <Button title="Calcular" onPress={this.calcularCustoCombustivel} />

        {this.state.resultado > 0 && (
          <Text style={{ marginTop: 20 }}>
            Custo por quilômetro: R$ {this.state.resultado}
          </Text>
        )}
      </View>
    );
  }
}

export default CalculadoraCombustivel;