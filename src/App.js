import React from 'react'
import '.App.css'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {peso: '', altura: '', info: '-', resultado: '0'}
    this.calculaIMC = this.calculaIMC.bind(this)
  }

  calculaIMC() {
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if(s.resultado < 18.5){
      s.info = 'MENOR QUE 18,5: Magro(a)'
    }
    else if (s.resultado < 24,9){
      s.info = 'ENTRE 18,5 E 24,9: Normal'
    }
    else if (s.resultado < 29,9){
      s.info = 'ENTRE 25,0 E 29,9: Sobrepeso'
    }
    else if (s.resultado < 39,9){
      s.info = 'ENTRE 30,0 E 39,9: Obesidade'
    }
    else if (s.resultado > 39,9){
      s.info = 'MAIOR QUE 40,0: Obesidade Grave'
    }
    this.setState(s)
  }
}

const Separator = () => (
  <View style={styles.separator} />
)

clear = () => {
  this.setState({
    peso: '',
    altura: '',
    resultado: '0.0',
    info: '-'
  })
}

render() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.text}>Altura (m)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={altura => this.setState({ altura })}
        value={this.state.altura}
        placeholder='Exemplo: 1,75'
        KeyboardType={'numeric'}
      />
      <Text style={styles.text}>Peso (kg)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='Exemplo: 68,8'
          keyboardType={'numeric'}
        />
      <Separator />
      <Button
        onPress={this.calculaIMC}
        title='Calcula'
        color='green'
        accessibilityLabel='Clique aqui para calcular o IMC'
        />
      <Separator />
      <Button
       onPress={this.clear}
       title='Limpa'
       color='Red'
       accessibilityLabel='Botão para limpar os valores'
       />
       <Separator />
       <Text style={styles.input}>Seu IMC é: {this.state.resultado} {this.state.info}</Text>   
    </View>
  )
}


