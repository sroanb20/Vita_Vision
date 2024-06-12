import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as Progress from 'react-native-progress'

const Main = () => {

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text>Vitamin A</Text>
                    <Progress.Bar progress={0.20} animated={false} color={"#00b200"} style={styles.bar}/>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Text>Vitamin B</Text>
                    <Progress.Bar progress={0.60} animated={false} color={"#00b200"} style={styles.bar}/>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Text>Vitamin B12</Text>
                    <Progress.Bar progress={0.44} animated={false} color={"#00b200"} style={styles.bar}/>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Text>Vitamin D</Text>
                    <Progress.Bar progress={1} animated={false} color={"#00b200"} style={styles.bar}/>
                </View>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        top: 20
    },
    bar: {
        marginVertical: 20,
        width: 350
    },
});

export default Main;