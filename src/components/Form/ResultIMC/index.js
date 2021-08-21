import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function ResultIMC(props){
    return (
        <View style={styles.ResultIMC}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberImc}>{props.ResultIMC}</Text>
        </View>
    )
}