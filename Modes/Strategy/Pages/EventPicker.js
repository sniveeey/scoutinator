import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import Colors from '../../../colors';
import { useState, useEffect } from 'react';
import ky from 'ky';
import Constants from '../../../constants'
import { normalize } from '../../CommonComponents/fontScaler';



export default function EventPicker({ route, navigation }) {
    const team = route.params.teamId;
    const year = route.params.year;
    const [eventData, setEventData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function navigateToVisualization(event) {
        navigation.navigate('VisualView', {teamId: team, event: event});
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ky.get(`${Constants.API_URL}/getTeamEvents?team=${team}&year=${year}`).json();
                setEventData(data);
            } catch (error) {
                navigation.navigate('ErrorPage', {error: error.message});
            }
            setIsLoading(false);
        };
        fetchData();
    });

    if (isLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size={Dimensions.get('window').width*0.6} color={Colors.subText} />
            </View>
        ) 
    }

    return (
        <ScrollView vertical={true} contentContainerStyle={styles.rootView}>
            <View style={styles.padding}>
                {eventData.map((event, index) => {
                    return (
                        <TouchableOpacity style={styles.event} onPress={() => {navigateToVisualization(event.key)}}>
                            <Text style={styles.buttonHeader}>{event.event_type_string}</Text>
                            <Text numberOfLines={3} style={styles.buttonText}>{event.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootView: {
        backgroundColor: Colors.background,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    center: {
        backgroundColor: Colors.background,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    padding: {
        width: '90%',
        display: 'flex',
        gap: 20,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    event: {
        backgroundColor: Colors.tab,
        borderRadius: 10,
        minHeight: Dimensions.get('window').height * 0.3,
        width: '100%',
        padding: 10,
        paddingTop: 0,
    },
    buttonText: {
        color: Colors.subText,
        fontSize: normalize(25),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 2,
        marginTop: 10,
    },
    buttonHeader: {
        color: Colors.subText,
        fontSize: normalize(40),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 2,
        borderBottomColor: Colors.subText,
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
});