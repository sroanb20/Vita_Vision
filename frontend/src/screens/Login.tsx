import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Username</Text>
                <TextInput style={styles.inputFields} placeholder="Enter username ..."/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput style={styles.inputFields} placeholder="Enter password ..."/>
            </View>

            <View style={styles.btLogin}>
                <Button color={"#00b200"} title={"Login"}/>
            </View>

            <View style={styles.btCancel}>
                <Button color={"grey"} title={"Cancel"}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    heading: {
        fontSize: 50,
        marginBottom: 20
    },

    inputContainer: {
        marginBottom: 20
    },

    labelText: {
        marginBottom: 5,
        fontSize: 18
    },

    inputFields: {
        borderWidth: 1,
        borderColor: "grey",
        width: 200,
        height: 40,
        paddingLeft: 5
    },

    btLogin: {
        width: 200,
        marginBottom: 20
    },

    btCancel: {
        width: 200,
        marginBottom: 20
    }
})

export default Login;
