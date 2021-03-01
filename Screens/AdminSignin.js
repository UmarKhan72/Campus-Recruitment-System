import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Logo from '../Images/Logo.png';
import { StatusBar } from 'expo-status-bar';

const AdminSignin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={Logo} style={styles.image} />
            <Button onPress={() => navigation.navigate("Admin Signin")} containerStyle={styles.button} title="Login in" />
        </View>
    )
}

export default AdminSignin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        marginBottom: 70,
        height: 200,
    },
    button: {
        width: 250,
        marginTop: 20,
        backgroundColor: "#fff"
    }
})
