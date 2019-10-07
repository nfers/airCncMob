import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, 
    StyleSheet, Text, TextInput, 
    AsyncStorage, TouchableOpacity, Image } from 'react-native';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('List');
            }
        })
    }, []);


    async function handleSubmit() {
        const response = await api.post('http://192.168.56.1:3031/sessions', {
            email
        })

        const { _id } = response.data;
        console.log(_id);

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);
        
        navigation.navigate('List');
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