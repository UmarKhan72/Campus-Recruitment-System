import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';
import { StatusBar } from 'expo-status-bar';

const VacancyForm = ({ navigation }) => {
    const [CompanyName, setCompanyName] = useState("");
    const [CompanyPhone, setCompanyPhone] = useState("");
    const [PostName, setPostName] = useState("");
    const [CompanyAddress, setCompanyAddress] = useState("");
    const [Salary, setSalary] = useState("");

    const donate = async () => {
        await db.collection('chats').add({
            CompanyName: CompanyName,
            CompanyPhone: CompanyPhone,
            PostName: PostName,
            CompanyAddress: CompanyAddress,
            Salary: Salary,
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
                    placeholder="Enter Your Company Name"
                    onChangeText={(e) => setCompanyName(e)}
                    onSubmitEditing={donate}
                    value={CompanyName}
                />
                <Input
                    placeholder="Enter Your Phone Number"
                    onChangeText={(e) => setCompanyPhone(e)}
                    onSubmitEditing={donate}
                    value={CompanyPhone}
                />
                <Input
                    placeholder="Enter Your Company Address"
                    onChangeText={(e) => setCompanyAddress(e)}
                    onSubmitEditing={donate}
                    value={CompanyAddress}
                />
                <Picker
                    onValueChange={(e) => setPostName(e)}
                    selectedValue={PostName}
                >
                    <Picker.Item label="Select Post Name" value="PostName" />
                    <Picker.Item label="IOS Developer" value="IOS Developer" />
                    <Picker.Item label="Android Developer" value="Android Developer" />
                    <Picker.Item label="Wordpress Developer" value="Wordpress Developer" />
                </Picker>
                <Picker
                    onValueChange={(e) => setSalary(e)}
                    selectedValue={Salary}
                >
                    <Picker.Item label="Select Monthly Salary" value="Salary" />
                    <Picker.Item label="100000" value="25000" />
                    <Picker.Item label="70000" value="50000" />
                    <Picker.Item label="90000" value="100000" />
                </Picker>
                <Button disabled={!CompanyName, !PostName, !Salary, !CompanyPhone, !CompanyAddress}  onPress={donate} title='Post Job' />
            </View>
        </ScrollView>
    )
}

export default VacancyForm;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 100,
        backgroundColor: "white",
        paddingBottom: 215,
        height: "100%",
    },
})

