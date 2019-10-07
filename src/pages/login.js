import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    async function handleSubmit() {
        console.log(email);
  
    }

    return (
        /*tratamento para quando o usuario for digitar o email
        nos celulares IOS, o teclado não sobreponha o botão 
        */
        <KeyboardAvoidingView enabled={Platform.OS ==='ios'} behavior="padding" style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}> Seu e-Mail*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} //não permite corrigir o que o usuario digitou 
                    value={email}
                    onChangeText={setEmail}
                />               
                <Text style={styles.label}> Tecnologias*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false} 
                    value={techs}
                    onChangeText={setTechs}
                />               
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
        },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    }, 
    label: {
        fontWeight: 'bold', 
        color: '#444', 
        marginBottom: 8
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#ddd', 
        paddingHorizontal: 20,
        fontSize: 16, 
        color: '#444',
        marginBottom: 20,
        borderRadius: 2
    }, 
    button: {
        height: 42, 
        backgroundColor: '#f05a5b', 
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 2
    }, 
    buttonText: {
        color: '#FFF', 
        fontWeight: 'bold',
        fontSize: 16
    }
});