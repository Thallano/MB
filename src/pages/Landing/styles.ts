import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F5EFFF',
        padding: 80
    },

    headerIntro:{
        justifyContent: 'space-between',
    },

    menuButton:{ 
        color: '#F6821F',
        marginLeft: -60,
        marginTop: -60,
    },

    title:{
        fontFamily: 'Poppins_400Regular',
        color: '#2E2F32',
        fontSize: 24,
        lineHeight: 30,
        marginTop:20,
        marginRight: -40,
        textAlign: 'right',
    },
 

    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#2D3741',
        fontSize: 20,
    },

    containerBottom:{
        flex:1,
        backgroundColor: '#F52D20',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 40
    },

    banner:{
        width: 180,
        height: 180,
        marginTop: -130
    },

    buttonPrimary:{
        backgroundColor: '#2E2F32',
        height: 75,
        width: '100%',
        borderRadius: 40,
        padding: 24,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    buttonText:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#D6F420',
        fontSize: 18,
        textAlign: 'center',
    },

})

export default styles;