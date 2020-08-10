import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 

import logoImg  from '../../../assets/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function Landing(){
    const { navigate } = useNavigation();
    
    function handleNavigateToMenuItens(){
        navigate('Menu');
    }
    return (
       <>
       <View style={styles.container}>
            <View style={styles.headerIntro}>
                
                <MaterialIcons style={styles.menuButton} size={25} name="menu"  />    

                <Text style={styles.title}>
                    Seja bem-vindo!{'\n'}
                    <Text style={styles.titleBold}>Bora comer um lanche?</Text>
                </Text>
            </View>   
        </View> 
        <View style={styles.containerBottom}>
            
            <Image source={ logoImg } style={styles.banner} /> 
             
            <RectButton onPress={handleNavigateToMenuItens} style={styles.buttonPrimary}>
                <Text style={styles.buttonText}        
                >Menu do Restaurante</Text>
                <MaterialIcons name="restaurant-menu" size={24} color="#D6F420" />
            </RectButton>
        </View>
        </>
    )
}

export default Landing;