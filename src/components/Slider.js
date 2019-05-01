import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {
        flex: 0,
        height: 50
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    title: {
      color: '#000',
      fontSize: 22,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginBottom: 15,
    },
    pic: {
        height: 90,
        width: 90,
        marginBottom: 20
    }
  })
  
  export default class Slider extends Component {
    render(){
      return (
        <View style={{height: 400, marginBottom: 25}}>
            <Swiper style={styles.wrapper} height={100} width={300} showsButtons={false}>
            <View style={styles.slide1}>
                <Image style={styles.pic} source={require('../assets/Sheet.png')} />
                <Text style={styles.title}>Welcome To Polly</Text>
                <Text style={styles.paragraph}>Add Policies and Manage your insurance portfolio in one place.</Text>
            </View>
            <View style={styles.slide2}>
                <Image style={styles.pic} source={require('../assets/Sheet.png')} />
                <Text style={styles.title}>We make it easy for you to claim</Text>
                <Text style={styles.paragraph}>Add relevant documents and images to your policy that can be sent to your ensurer.</Text>
            </View>
            <View style={styles.slide3}>
                <Image style={styles.pic} source={require('../assets/Sheet.png')} />
                <Text style={styles.title}>Policy Renewal Reminders</Text>
                <Text style={styles.paragraph}>Be notified when a policy is expiring soon and make sure you're always covered.</Text>
            </View>
            </Swiper>
        </View>
      );
    }
  }