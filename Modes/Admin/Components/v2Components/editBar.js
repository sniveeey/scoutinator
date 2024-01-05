import { StyleSheet, Text, View, Pressable, Dimensions, TouchableOpacity, ScrollView, } from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from '../../../../colors';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';






function AllToolBar(props){

    const addBox = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            props.add();
    }).runOnJS(true);

    const duplicate = Gesture.Tap()
        
        .onStart(() => {
        console.log("Duplicate")
        props.duplicate();
    }).runOnJS(true);

    const redo = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            console.log("redo")
    }).runOnJS(true);

    const undo = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            console.log("undo")
    }).runOnJS(true);

    const addText = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            console.log("add Text")
    }).runOnJS(true);

    const addIcon = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            console.log("add Icon")
        }).runOnJS(true);
    const remove = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            console.log("Delete")
            props.remove(props.selectedBox);
    }).runOnJS(true);
    const map = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            console.log("Map")
    }).runOnJS(true);
    const color = Gesture.Tap()
        .maxDuration(250)
        .onStart(() => {
            console.log("Color")
    }).runOnJS(true);



    return(
        <ScrollView style={styles.bar} horizontal={true} contentContainerStyle={styles.innerBar}> 

            <GestureDetector gesture={addBox}> 
                <MaterialIcons name="add" size={34} color="#e3e2e6" fontWeight="bold"/> 
            </GestureDetector>

            <GestureDetector gesture={undo}> 
                <MaterialIcons name="undo" size={34} color="#e3e2e6" />
            </GestureDetector>

            <GestureDetector gesture={redo}> 
                <MaterialIcons name="redo" size={34} color="#e3e2e6" />
            </GestureDetector>

  

            <GestureDetector gesture={remove}> 
                <MaterialIcons name="delete" size={34} color="#e3e2e6" />
            </GestureDetector>

            <GestureDetector gesture={duplicate}> 
                <MaterialIcons name="content-copy" size={34} color="#e3e2e6" />
            </GestureDetector>

            <GestureDetector gesture={color}> 
                <MaterialIcons name="format-color-fill" size={34} color="#e3e2e6" />
            </GestureDetector>

            <GestureDetector gesture={addText}> 
                <MaterialIcons name="text-fields" size={34} color="#e3e2e6" />
            </GestureDetector>

            <GestureDetector gesture={addIcon}> 
                <MaterialIcons name="emoji-emotions" size={34} color="#e3e2e6" />
            </GestureDetector>

            <GestureDetector gesture={map}> 
                <MaterialIcons name="map" size={34} color="#e3e2e6" />
            </GestureDetector>
            

        </ScrollView>
    )
}



export default function ToolBar(props){

    
  const [ tabActive, setTabActive ] = useState(false);

    return( 

            <View style={{height: '100%', width: '100%'}}>
                <Pressable style={{position: 'absolute', bottom: 20, left: 20, }} onPress={() => setTabActive(!tabActive)}>  
                    <View style={[styles.showToolBar, tabActive && {borderTopRightRadius: 0,borderBottomRightRadius: 0,borderRightColor: "#e3e2e6",
        borderRightWidth: 5,}]}> 
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
                            
                            {tabActive ? <MaterialIcons name="chevron-left" size={54} color="#e3e2e6" /> : <MaterialIcons name="chevron-right" size={54} color="#e3e2e6" />}
                        </View>
                    </View>

                    
                </Pressable>
                {tabActive && <AllToolBar add={props.add} remove={props.remove} selectedBox={props.selectedBox} duplicate={props.duplicate} />}
            </View>

            


    )
}


width  = Dimensions.get("window").width - 105;


const styles = StyleSheet.create({
    bar: {
        flexDirection: "row",
        width: width,
        height: 65,
        bottom: 20,
        backgroundColor: colors.background,
        position: 'absolute',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        left: 85,

        
        borderRadius: 10,
        //display: 'flex'

        
        
    },
    innerBar: {
        alignItems: "center",
        flexDirection: 'row',
        gap: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    showToolBar: {
        width: 65,
        height: 65,
        borderRadius: 10,
        backgroundColor: colors.background,

  
        //opacity: 0.5, 
        
        zIndex: 1,
        


      },

});
  