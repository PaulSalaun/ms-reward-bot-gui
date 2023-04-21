import React, {Component, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {setStatusBarBackgroundColor} from "expo-status-bar";
import profilJSON from '../assets/profils_list.json'

export default class Home extends Component {
    render() {
        return (<View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <NavButtons/>
                <DailyProgress/>
                <InfoCards/>
            </View>);

    }
}

const NavButtons = ({onPress, title}) => (<View style={styles.buttonsList}>
        <TouchableOpacity onPress={() => alert('Bouton 1 citron')}
                          style={[styles.appButtonContainer, styles.appButtonContainer.button1]}>
            <Text style={styles.appButtonText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.appButtonContainer, styles.appButtonContainer.button2]}>
            <Text style={styles.appButtonText}>Accounts</Text>
        </TouchableOpacity>
    </View>);

const styles = StyleSheet.create({
    container: {
        flex: 1, marginHorizontal: 16, marginTop: 30
    }, buttonsList: {
        paddingTop: 15, flexDirection: 'row',
    }, title: {
        fontWeight: 'bold', color: 'white', fontSize: 30, paddingLeft: 10
    }, contentTitle: {
        fontWeight: 'bold', color: 'white', fontSize: 20, paddingLeft: 10
    }, text: {
        color: "#b7b7b7", fontSize: 11, paddingLeft: 10
    }, appButtonContainer: {
        elevation: 8, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 20, button1: {
            backgroundColor: "#557e61",
        }, button2: {
            backgroundColor: "#1a1a1a",
        },
    }, appButtonText: {
        fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center", textTransform: "uppercase"
    }
});

const DailyProgress = ({progress}) => (<View style={cardstyle.container}>
        <Text style={styles.contentTitle}>Daily Progress</Text>
        <Text style={styles.text}>Here you can see your daily task progress</Text>
        <Text style={[styles.contentTitle, {marginTop: 30}]}>76 %</Text>
        <View style={cardstyle.progressBar}>
            <View style={[cardstyle.progress, {width: 76 + '%'}]}/>
        </View>
    </View>);

const cardstyle = StyleSheet.create({
    container: {
        backgroundColor: "#333333", marginVertical: 40, borderRadius: 20, padding: 10
    }, progressBar: {
        height: 10, borderRadius: 5, backgroundColor: '#b7b7b7', marginTop: 5,
    }, progress: {
        height: 10, borderRadius: 5, backgroundColor: '#557e61',
    },
})

const InfoCards = ({value}) => {
    const [rewards, setRewards] = useState('');
    const [streak, setStreak] = useState('');
    const [hourRun, setHourRun] = useState('');
    const [count, setCount] = useState(profilJSON.profils.length);


    useEffect(() => {
        const index = 3;
        setHourRun(profilJSON.profils[index]["last-run"])
        setRewards(profilJSON.profils[index].rewards);
        setStreak(profilJSON.profils[index].streak);
    }, []);

    const [totalRewards, setTotalRewards] = useState(() => profilJSON.profils.reduce((acc, profil) => acc + parseInt(profil.rewards), 0));


    return (<View>
            <Text style={styles.contentTitle}>Board</Text>
            <View style={infoCards.container}>
                <View style={infoCards.cards}>
                    <TouchableOpacity style={[infoCards.iconContainer, infoCards.iconContainer.case1]}>
                        <Text style={infoCards.icon}>⍟</Text>
                    </TouchableOpacity>
                    <Text style={infoCards.contentTitle}>Rewards</Text>
                    <Text style={[infoCards.valueText, infoCards.valueText.case1]}>{totalRewards}</Text>
                </View>
                <View style={infoCards.cards}>
                    <TouchableOpacity style={[infoCards.iconContainer, infoCards.iconContainer.case2]}>
                        <Text style={infoCards.icon}>✓</Text>
                    </TouchableOpacity>
                    <Text style={infoCards.contentTitle}>Last run</Text>
                    <Text style={[infoCards.valueText, infoCards.valueText.case2]}>{hourRun}</Text>
                </View>
            </View>
            <View style={infoCards.container}>
                <View style={infoCards.cards}>
                    <TouchableOpacity style={[infoCards.iconContainer, infoCards.iconContainer.case3]}>
                        <Text style={infoCards.icon}>☻</Text>
                    </TouchableOpacity>
                    <Text style={infoCards.contentTitle}>Accounts</Text>
                    <Text style={[infoCards.valueText, infoCards.valueText.case3]}>{count}</Text>
                </View>
                <View style={infoCards.cards}>
                    <TouchableOpacity style={[infoCards.iconContainer, infoCards.iconContainer.case4]}>
                        <Text style={infoCards.icon}>⊕</Text>
                    </TouchableOpacity>
                    <Text style={infoCards.contentTitle}>Streak</Text>
                    <Text style={[infoCards.valueText, infoCards.valueText.case4]}>{streak}</Text>
                </View>
            </View>
        </View>)
};

const infoCards = StyleSheet.create({
    container: {
        flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',

    }, cards: {
        backgroundColor: "#333333", borderRadius: 20, padding: 10, width: 48 + '%'
    }, iconContainer: {
        width: 40, borderRadius: 15, justifyContent: 'center', alignItems: 'center', case1: {
            backgroundColor: "#1e8ffd"
        }, case2: {
            backgroundColor: "#bb62fd"
        }, case3: {
            backgroundColor: "#fdaa1e"
        }, case4: {
            backgroundColor: "#7efd62"
        }
    }, contentTitle: {
        fontWeight: 'bold', color: 'white', fontSize: 15,
    }, icon: {
        color: 'white', fontSize: 30
    }, valueText: {
        fontWeight: 'bold', fontSize: 35, textAlign: "right", case1: {
            color: "#1e8ffd"
        }, case2: {
            color: "#bb62fd"
        }, case3: {
            color: "#fdaa1e"
        }, case4: {
            color: "#7efd62"
        }
    }
})





