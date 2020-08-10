import React from "react";
import {View, Image, Text, Linking } from 'react-native';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";


interface itemMenu{
    itemMenu:itemMenu;
    }
    
const itemMenu: React.FC<itemMenu> = ({ item }) => {
   
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>Nome do Item</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Descrição</Text>
            </View>
                
            <View style={styles.costContainer}>
                <Text style={styles.costText}>Preço</Text>
            </View>
    
        </View>
        )
}

export default itemMenu;