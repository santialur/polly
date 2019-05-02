import React from "react";
import {StyleSheet, View, Button as RNButton, Text, TextInput} from 'react-native';
import Button from '../../components/Button';

export default class Registration extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Create a Secure Polly Account</Text>
            <TextInput style={styles.input} placeholder="Full Name"></TextInput>
            <TextInput style={styles.input} placeholder="Email"></TextInput>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}></TextInput>

            <Button styleType="clear" style={styles.button} text="Next" />
            <Text style={styles.subtitle}>Already Have an Account? 
            </Text>
            <RNButton
                title="Login"
                onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
    );
  }
}
      
const styles = StyleSheet.create({
    button: {
        padding: 15
    },  
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },      
    subtitle: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        marginVertical: 2,
        width: 200,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#CCC'
    }
});