import React from 'react';
import {Button, ImageBackground, StyleSheet, View} from "react-native";

const Home = () => {
    return (
        <>
            <ImageBackground style={styles.bg} source={require("../../assets/VitaVisionBackground.png")}>

                <View style={styles.container}>

                    <View style={styles.btLogin}>
                        <Button color={"#00b200"} title={"Login"}/>
                    </View>

                    <View style={styles.btRegister}>
                        <Button color={"#00b200"} title={"Register"}/>
                    </View>

                </View>

            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    bg: {
        height: "100%",
        width: "100%"
    },

    container: {
        alignItems: "center"
    },

    btLogin: {
        width: "66%",
        top: 600
    },

    btRegister: {
        width: "66%",
        top: 610
    }
});

export default Home;