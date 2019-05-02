import React from "react";
import {StyleSheet, View, Button as RButton} from 'react-native';
import Button from '../../components/Button';
import Slider from '../../components/Slider';

class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Slider></Slider>
            <Button styleType="clear" text="Log In"/>
            <Button styleType="dark" text="Sign Up"/>
            <RButton
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Registration')}
            />
        </View>
    );
  }
}

export default Login;
      
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});