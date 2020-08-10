import React from 'react';
import {View, Text, Linking } from 'react-native';
import PageHeader from '../../components/PageHeader';
import { MaterialIcons } from '@expo/vector-icons'; 
import ItemMenu, { Item } from '../../components/Item';

import styles from './styles';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

function Menu () {
    function handleLinkToWhatsapp ( ) {
        Linking.openURL(`whatsapp://send?phone=$55869958-5884textOl%C3%A1%2C%20boa%20noite%2C%20gostaria%20de%20fazer%20um%20pedido`)
   }
    return (
        
        <View style={styles.container}>
            <PageHeader title="Cardápio" >
                
             </PageHeader>

             <ScrollView style={styles.itensContainer} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
                <ItemMenu />
              
             </ScrollView>

             <View style={styles.buttonsContainer}>
                <RectButton onPress={handleLinkToWhatsapp} style={styles.buttonPrimary}>
                    <Text style={styles.buttonText}>WhatsApp Mamãe Burg    </Text>
                    <MaterialIcons name="chat" size={20} color="#2D3741" />
                </RectButton>
            </View>
               
        </View>   
        
    );
}

export default Menu;