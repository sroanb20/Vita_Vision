import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {IFood} from "../interfaces/IFood";

const Main = ({navigation}: any) => {

    const [vitaminA, setVitaminA] = useState(0);
    const [vitaminB1, setVitaminB1] = useState(0);
    const [vitaminB2, setVitaminB2] = useState(0);
    const [vitaminB3, setVitaminB3] = useState(0);
    const [vitaminB5, setVitaminB5] = useState(0);
    const [vitaminB6, setVitaminB6] = useState(0);
    const [vitaminB7, setVitaminB7] = useState(0);
    const [vitaminB9, setVitaminB9] = useState(0);
    const [vitaminB12, setVitaminB12] = useState(0);
    const [vitaminC, setVitaminC] = useState(0);
    const [vitaminD, setVitaminD] = useState(0);
    const [vitaminE, setVitaminE] = useState(0);
    const [vitaminK, setVitaminK] = useState(0);

    const [registeredFood, setRegisteredFood] = useState<IFood[]>([
        { _id: "test1", name: "Apfel", amount: 2, vitaminA: 12, vitaminC: 14 },
        { _id: "test2", name: "Banane", amount: 0, vitaminB12: 32, vitaminB6: 0.4 },
        { _id: "test3", name: "Birne", amount: 5, vitaminA: 17, vitaminB12: 2 },
        { _id: "test4", name: "Orange", amount: 0, vitaminC: 53.2, vitaminA: 225 },
        { _id: "test5", name: "Spinat", amount: 0, vitaminA: 469, vitaminC: 28.1, vitaminK: 482.9 },
        { _id: "test6", name: "Karotte", amount: 0, vitaminA: 835, vitaminK: 13.2 },
        { _id: "test7", name: "Erdbeere", amount: 0, vitaminC: 59.1, vitaminB9: 24 },
        { _id: "test8", name: "Brokkoli", amount: 0, vitaminC: 89.2, vitaminK: 101.6 },
        { _id: "test9", name: "Mango", amount: 0, vitaminA: 54, vitaminC: 36.4, vitaminE: 1.2 },
        { _id: "test10", name: "Tomate", amount: 0, vitaminA: 42, vitaminC: 13.7, vitaminK: 7.9 },
        { _id: "test11", name: "Kirsche", amount: 0, vitaminC: 7, vitaminA: 64, vitaminE: 0.3 },
        { _id: "test12", name: "Avocado", amount: 0, vitaminB5: 1.4, vitaminK: 21, vitaminE: 2.1 },
        { _id: "test13", name: "Blaubeere", amount: 0, vitaminC: 9.7, vitaminK: 19.3, vitaminE: 0.6 },
        { _id: "test14", name: "Kiwi", amount: 0, vitaminC: 92.7, vitaminK: 40.3, vitaminE: 1.5 },
        { _id: "test15", name: "Paprika", amount: 0, vitaminC: 127.7, vitaminA: 157, vitaminB6: 0.3 }
    ]);

    const calculateCurrentVitamins = () => {
        let totalVitaminA = 0;
        let totalVitaminB1 = 0;
        let totalVitaminB2 = 0;
        let totalVitaminB3 = 0;
        let totalVitaminB5 = 0;
        let totalVitaminB6 = 0;
        let totalVitaminB7 = 0;
        let totalVitaminB9 = 0;
        let totalVitaminB12 = 0;
        let totalVitaminC = 0;
        let totalVitaminD = 0;
        let totalVitaminE = 0;
        let totalVitaminK = 0;

        registeredFood.forEach(f => {
            if (f.vitaminA !== undefined) {
                totalVitaminA += f.vitaminA * f.amount;
            }
            if (f.vitaminB1 !== undefined) {
                totalVitaminB1 += f.vitaminB1 * f.amount;
            }
            if (f.vitaminB2 !== undefined) {
                totalVitaminB2 += f.vitaminB2 * f.amount;
            }
            if (f.vitaminB3 !== undefined) {
                totalVitaminB3 += f.vitaminB3 * f.amount;
            }
            if (f.vitaminB5 !== undefined) {
                totalVitaminB5 += f.vitaminB5 * f.amount;
            }
            if (f.vitaminB6 !== undefined) {
                totalVitaminB6 += f.vitaminB6 * f.amount;
            }
            if (f.vitaminB7 !== undefined) {
                totalVitaminB7 += f.vitaminB7 * f.amount;
            }
            if (f.vitaminB9 !== undefined) {
                totalVitaminB9 += f.vitaminB9 * f.amount;
            }
            if (f.vitaminB12 !== undefined) {
                totalVitaminB12 += f.vitaminB12 * f.amount;
            }
            if (f.vitaminC !== undefined) {
                totalVitaminC += f.vitaminC * f.amount;
            }
            if (f.vitaminD !== undefined) {
                totalVitaminD += f.vitaminD * f.amount;
            }
            if (f.vitaminE !== undefined) {
                totalVitaminE += f.vitaminE * f.amount;
            }
            if (f.vitaminK !== undefined) {
                totalVitaminK += f.vitaminK * f.amount;
            }
        });

        setVitaminA(totalVitaminA);
        setVitaminB1(totalVitaminB1);
        setVitaminB2(totalVitaminB2);
        setVitaminB3(totalVitaminB3);
        setVitaminB5(totalVitaminB5);
        setVitaminB6(totalVitaminB6);
        setVitaminB7(totalVitaminB7);
        setVitaminB9(totalVitaminB9);
        setVitaminB12(totalVitaminB12);
        setVitaminC(totalVitaminC);
        setVitaminD(totalVitaminD);
        setVitaminE(totalVitaminE);
        setVitaminK(totalVitaminK);
    }

    useEffect(() => {
        calculateCurrentVitamins();
    }, []);

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
                <View style={styles.container}>
                    <View>
                        <Text>Vitamin A</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminA} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B1</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB1} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B2</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB2} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B3</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB3} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B5</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB5} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B6</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB6} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B7</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB7} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B9</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB9} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin B12</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminB12} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin C</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminC} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin D</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminD} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin E</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminE} / 100</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text>Vitamin K</Text>
                        <ProgressBar progress={0.5} color={"#00b200"} style={styles.bar} />
                        <Text style={styles.statusText}>{vitaminK} / 100</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.leftButtonStyle}>
                <Button color={"#cdcdcd"} title={"Food"} onPress={onMoveList}/>
            </View>

            <View style={styles.middleButtonStyle}>
                <Button color={"#00b200"} title={"VitaVision"} onPress={onMoveMain}/>
            </View>

            <View style={styles.rightButtonStyle}>
                <Button color={"#cdcdcd"} title={"Settings"} onPress={onMoveSettings}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        top: 10
    },
    bar: {
        marginTop: 10,
        width: 350,
        borderColor: "#000000"
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
    statusText: {
        marginBottom: 20
    }
});

export default Main;