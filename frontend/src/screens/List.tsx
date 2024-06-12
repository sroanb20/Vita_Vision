import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Button, TouchableOpacity} from "react-native";
import {IFood} from "../interfaces/IFood";

const List = () => {

    const [registeredFood, setRegisteredFood] = useState<IFood[]>([
        { _id: "test1", name: "Apfel", vitaminA: 12, vitaminC: 14 },
        { _id: "test2", name: "Banane", vitaminB12: 32, vitaminB6: 0.4 },
        { _id: "test3", name: "Birne", vitaminA: 17, vitaminB12: 2 },
        { _id: "test4", name: "Orange", vitaminC: 53.2, vitaminA: 225 },
        { _id: "test5", name: "Spinat", vitaminA: 469, vitaminC: 28.1, vitaminK: 482.9 },
        { _id: "test6", name: "Karotte", vitaminA: 835, vitaminK: 13.2 },
        { _id: "test7", name: "Erdbeere", vitaminC: 59.1, vitaminB9: 24 },
        { _id: "test8", name: "Brokkoli", vitaminC: 89.2, vitaminK: 101.6 },
        { _id: "test9", name: "Mango", vitaminA: 54, vitaminC: 36.4, vitaminE: 1.2 },
        { _id: "test10", name: "Tomate", vitaminA: 42, vitaminC: 13.7, vitaminK: 7.9 },
        { _id: "test11", name: "Kirsche", vitaminC: 7, vitaminA: 64, vitaminE: 0.3 },
        { _id: "test12", name: "Avocado", vitaminB5: 1.4, vitaminK: 21, vitaminE: 2.1 },
        { _id: "test13", name: "Blaubeere", vitaminC: 9.7, vitaminK: 19.3, vitaminE: 0.6 },
        { _id: "test14", name: "Kiwi", vitaminC: 92.7, vitaminK: 40.3, vitaminE: 1.5 },
        { _id: "test15", name: "Paprika", vitaminC: 127.7, vitaminA: 157, vitaminB6: 0.3 }
    ]);


    const vitaminProperties = [
        "vitaminA", "vitaminB1", "vitaminB2", "vitaminB3", "vitaminB5",
        "vitaminB6", "vitaminB7", "vitaminB9", "vitaminB12",
        "vitaminC", "vitaminD", "vitaminE", "vitaminK"
    ];

    const getVitaminValue = (food: IFood, vitamin: string): number | undefined => {
        return food[vitamin as keyof IFood] as number | undefined;
    };

    return (
        <ScrollView>
            {registeredFood.map(f => (
                <View key={f._id} style={styles.productContainer}>
                    <Text style={styles.productName}>{f.name}</Text>

                    <View style={styles.vitaminContainer}>
                        {vitaminProperties
                            .filter(vitamin => getVitaminValue(f, vitamin) !== undefined)
                            .map(vitamin => (
                                <Text key={vitamin} style={styles.vitaminText}>
                                    {vitamin}: {getVitaminValue(f, vitamin)}
                                </Text>
                            ))
                        }
                    </View>

                    <View style={styles.counterContainer}>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterText}>1</Text>
                        <TouchableOpacity style={styles.subtractButton}>
                            <Text style={styles.subtractButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 20,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    vitaminContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    vitaminText: {
        marginRight: 10,
        fontSize: 14,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    addButton: {
        backgroundColor: '#00b200',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtractButton: {
        backgroundColor: '#A9A9A9',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    subtractButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    counterText: {
        fontSize: 18,
        marginHorizontal: 20,
    }
});
//Todo: neger

export default List;