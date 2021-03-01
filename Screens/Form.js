import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';
import { StatusBar } from 'expo-status-bar';

const Form = ({ navigation }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [Education, setEducation] = useState("");
    const [address, setAddress] = useState("");
    const [Skills, setSkills] = useState("");

    const donate = async () => {
        await db.collection('studentProfiles').add({
            FullName: name,
            phoneNum: phone,
            Education: Education,
            address: address,
            Skills: Skills,
        }).then(() => {
            navigation.goBack();
        })
            .catch((error) => alert(error));
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Input
                    placeholder="Enter Full Name"
                    onChangeText={(e) => setName(e)}
                    onSubmitEditing={donate}
                    value={name}
                />
                <Input
                    placeholder="Enter Marks in Last Class"
                    onChangeText={(e) => setPhone(e)}
                    onSubmitEditing={donate}
                    value={phone}
                />
                <Input
                    placeholder="Enter Local-Address"
                    onChangeText={(e) => setAddress(e)}
                    onSubmitEditing={donate}
                    value={address}
                />
                <Picker
                    onValueChange={(e) => setEducation(e)}
                    selectedValue={Education}
                >
                    <Picker.Item label="Select Education" value="Education" />
                    <Picker.Item label="Graduation" value="Graduation" />
                    <Picker.Item label="Phd" value="Phd" />
                    <Picker.Item label="mphil" value="mphil" />
                    <Picker.Item label="Inter" value="Inter" />
                    <Picker.Item label="MSc" value="MSc" />
                    <Picker.Item label="BSc" value="BSc" />
                    <Picker.Item label="Matric" value="Matric" />
                </Picker>
                <Picker
                    onValueChange={(e) => setSkills(e)}
                    selectedValue={Skills}
                >
                    <Picker.Item label="Select Skills" value="Skills" />
                    <Picker.Item label="IOS Developer" value="IOS Developer" />
                    <Picker.Item label="Android Developer" value="Android Developer" />
                    <Picker.Item label="Wordpress Developer" value="Wordpress Developer" />
               </Picker>
                <Button disabled={!name, !Education, !Skills, !phone, !address} onPress={donate} title='Post Resume' />
            </View>
        </ScrollView>
    )
}

export default Form;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 100,
        backgroundColor: "white",
        paddingBottom: 215,
        height: "100%",
    },
})

