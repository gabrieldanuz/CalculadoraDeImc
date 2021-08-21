import React, {useState} from 'react'
import { View, TextInput, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                 placeholder="Ex. 80.3"
                 keyboardType="numeric"
                ></TextInput>
                <TouchableOpacity
                style={styles.buttonCalculator} 
                onPress={() =>{
                    validationIMC()
                }}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
        </View>
    )
}