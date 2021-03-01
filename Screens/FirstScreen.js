import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Logo from '../Images/Logo.png';
import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native-reanimated';

const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={Logo} style={styles.image} />
            <Button onPress={() => navigation.navigate("Student Login")} containerStyle={styles.button} title="Student Login" />
            <Button onPress={() => navigation.navigate("Company Login")} containerStyle={styles.button} title="Company Login" />
            <Button onPress={() => navigation.navigate("Admin Login")} containerStyle={styles.button} type="outline" title="Admin Login" />
        </View>
    )
}

export default FirstScreen;

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
    },
    
})
