import React, {useState} from 'react'
import { View, TextInput, Text, Button} from 'react-native'
import ResultIMC from './ResultIMC'

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageIMC, setMessageIMC ] = useState("Preencha o Peso e Altura");
const [imc, setIMC] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator() {
    return setIMC((weight/(height*height)).toFixed(2))
}

function validationIMC(){
    if(weight!= null && height != null) {
        imcCalculator()
        setWeight(null)
        setHeight(null)
        setMessageIMC("Seu IMC é igual:")
        setTextButton("Calcular novamente")
        return
    }
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha o Peso e Altura")
}

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                ></TextInput>
                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                 placeholder="Ex. 80.3"
                 keyboardType="numeric"
                ></TextInput>
                <Button 
                onPress={() => validationIMC()}
                title={textButton}/>
            </View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
        </View>
    )
}