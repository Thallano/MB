import React from "react";
import {View, Image, Text, Linking } from 'react-native';

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

export interface Item {
    itemName: string;
    description: string;
    costText: string;
}

interface ItemMenuProps{
    item: Item;
}
    
function ItemMenu() {
   
    return (
        <>
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>X-MAMÃE</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Pão, carne 160g, queijo, alface, tomate e molho especial da mamãe. ção</Text>
            </View>
                
            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ 13.00</Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>X-PAPAI</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Pão, carne 260g, queijo, alface, tomate e molho especial da mamãe. ção</Text>
            </View>
                
            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ 12.00</Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>X-FILHO</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Pão, carne 160g, queijo, alface, tomate e molho especial da mamãe. ção</Text>
            </View>
                
            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ 9.00</Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>X-FILHA</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Pão, carne 160g, queijo, alface, tomate e molho especial da mamãe. ção</Text>
            </View>
                
            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ 8.00</Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>COMBO FAMÍLIA</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Pão, carne 160g, queijo, alface, tomate e molho especial da mamãe. ção</Text>
            </View>
                
            <View style={styles.costContainer}>
                <Text style={styles.costText}>R$ 33.00</Text>
            </View>
        </View>

        </>
    )
}

export default ItemMenu;