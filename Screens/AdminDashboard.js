import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import Logo from '../Images/Logo.png';
import { StatusBar } from 'expo-status-bar';

const AdminDashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={Logo} style={styles.image} />
            <Button onPress={() => navigation.navigate("Vacancies")} containerStyle={styles.button} title="Vacancy List" />
            <Button onPress={() => navigation.navigate("Detail")} containerStyle={styles.button} title="Students Profiles" />
            <Button onPress={() => navigation.navigate("Notifications")} containerStyle={styles.button} title="Notifications" />
        </View>
    )
}

export default AdminDashboard;

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
