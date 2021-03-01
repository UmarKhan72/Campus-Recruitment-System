import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Logo from '../Images/Logo.png';
import { StatusBar } from 'expo-status-bar';

const StudentSecondScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={Logo} style={styles.image} />
            <Button onPress={() => navigation.navigate("Student Sign in")} containerStyle={styles.button} title="Sign in" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Create Your Account" />
        </View>
    )
}

export default StudentSecondScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        marginBottom: 20,
        height: 200,
    },
    button: {
        width: 250,
        marginTop: 20,
    }
})
