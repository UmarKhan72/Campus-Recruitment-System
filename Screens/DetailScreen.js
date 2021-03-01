import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import List from './List';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../firebase';

const DetailScreen = ({ navigation }) => {
    const [studentProfiles, setstudentProfiles] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Campus Recruitment System')
        })
    };

    useEffect(() => {
        const xk = db.collection('studentProfiles').onSnapshot((snapshot) => (
            setstudentProfiles(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        )
        );
        return xk;
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Profiles",
            headerStyle: { backgroundColor: "#0F5F9A" },
            headerTitleStyle: { color: "#fff" },
            headerTintColor: "black",
            headerRight: () => (
                <View style={{
                    justifyContent: "space-around",
                    width: 80,
                    flexDirection: "row",
                }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Form')}>
                    <Text style={styles.donateNow}>Post Resume</Text>
                    </TouchableOpacity>
                </View>
            ),
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                <Text style={styles.signout}>Sign out</Text>
                </TouchableOpacity>
            </View>
            ),
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
            <StatusBar style="light" />
                {studentProfiles.map(({ id, data: { FullName,phoneNum,Education, address, Skills }}) => (
                    <List
                    key={id} 
                    id={id} 
                    FullName={FullName}
                    phoneNum={phoneNum}
                    Education={Education}
                    address={address}
                    Skills={Skills}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    signout: {
        width: 65,
        backgroundColor: "white",
        height: 40,
        paddingTop: 10,
        borderRadius: 10,
        color: "black",
        textAlign: 'center',
        marginRight: 10,
        fontWeight: 'bold',
    },
    donateNow: {
        width: 100,
        backgroundColor: "white",
        height: 40,
        paddingTop: 10,
        borderRadius: 10,
        color: "black",
        textAlign: 'center',
        marginRight: 30,
        fontWeight: 'bold',
    }
});
