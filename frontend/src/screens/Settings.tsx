import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from "react-native";
import Slider from '@react-native-community/slider';

const Settings = ({navigation} : any) => {

    const [vitaminAGoal, setVitaminAGoal] = useState(700);
    const [vitaminB1Goal, setVitaminB1Goal] = useState(400);
    const [vitaminB2Goal, setVitaminB2Goal] = useState(200);
    const [vitaminB3Goal, setVitaminB3Goal] = useState(460);
    const [vitaminB5Goal, setVitaminB5Goal] = useState(330);
    const [vitaminB6Goal, setVitaminB6Goal] = useState(260);
    const [vitaminB7Goal, setVitaminB7Goal] = useState(500);
    const [vitaminB9Goal, setVitaminB9Goal] = useState(300);
    const [vitaminB12Goal, setVitaminB12Goal] = useState(800);
    const [vitaminCGoal, setVitaminCGoal] = useState(450);
    const [vitaminDGoal, setVitaminDGoal] = useState(240);
    const [vitaminEGoal, setVitaminEGoal] = useState(690);
    const [vitaminKGoal, setVitaminKGoal] = useState(640);

    const onMoveList = () => {
        navigation.navigate('List');
    }

    const onMoveMain = () => {
        navigation.navigate('Your Statistics');
    }

    const onMoveSettings = () => {
        navigation.navigate('Settings');
    }

    return (
        <>
            <ScrollView style={styles.scrollPane}>
                <Text style={styles.headingStyle}>Your personal goals</Text>

                <View style={styles.container}>
                    <Text>Vitamin A Goal: {vitaminAGoal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminAGoal} onValueChange={(value) => setVitaminAGoal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B1 Goal: {vitaminB1Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB1Goal} onValueChange={(value) => setVitaminB1Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B2 Goal: {vitaminB2Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB2Goal} onValueChange={(value) => setVitaminB2Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B3 Goal: {vitaminB3Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB3Goal} onValueChange={(value) => setVitaminB3Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B5 Goal: {vitaminB5Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB5Goal} onValueChange={(value) => setVitaminB5Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B6 Goal: {vitaminB6Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB6Goal} onValueChange={(value) => setVitaminB6Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B7 Goal: {vitaminB7Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB7Goal} onValueChange={(value) => setVitaminB7Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B9 Goal: {vitaminB9Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB9Goal} onValueChange={(value) => setVitaminB9Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin B12 Goal: {vitaminB12Goal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminB12Goal} onValueChange={(value) => setVitaminB12Goal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin C Goal: {vitaminCGoal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminCGoal} onValueChange={(value) => setVitaminCGoal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin D Goal: {vitaminDGoal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminDGoal} onValueChange={(value) => setVitaminDGoal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin E Goal: {vitaminEGoal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminEGoal} onValueChange={(value) => setVitaminEGoal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>

                <View style={styles.container}>
                    <Text>Vitamin K Goal: {vitaminKGoal} µg</Text>
                    <Slider style={styles.slider} minimumValue={0} maximumValue={1000} step={1} value={vitaminKGoal} onValueChange={(value) => setVitaminKGoal(value)} minimumTrackTintColor="#00b200" maximumTrackTintColor="#000000" thumbTintColor="#00b200"/>
                </View>
            </ScrollView>

            <View style={styles.leftButtonStyle}>
                <Button color={"#cdcdcd"} title={"Food"} onPress={onMoveList}/>
            </View>

            <View style={styles.middleButtonStyle}>
                <Button color={"#cdcdcd"} title={"VitaVision"} onPress={onMoveMain}/>
            </View>

            <View style={styles.rightButtonStyle}>
                <Button color={"#00b200"} title={"Settings"} onPress={onMoveSettings}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        top: 20
    },
    slider: {
        width: 300,
        height: 40,
        marginBottom: 20
    },
    leftButtonStyle: {
        position: "absolute",
        bottom: 0,
        width: "33%"
    },
    middleButtonStyle: {
        position: "absolute",
        alignSelf: "center",
        bottom: 0,
        width: "33%"
    },
    rightButtonStyle: {
        position: "absolute",
        left: "67%",
        bottom: 0,
        width: "33%"
    },
    scrollPane: {
        marginBottom: 30
    },
    headingStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    }
});

export default Settings;
