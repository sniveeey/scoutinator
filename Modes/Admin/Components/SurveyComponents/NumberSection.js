import React from 'react';
import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native';

export default function TextSection(props) {
  return (
    <View style={styles.numberSectionContainer}>
        <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={styles.header}>Number Section</Text>
            <TextInput
            placeholder="Question"
            value={props.content}
            onChangeText={props.onChangeQuestion}
            style={styles.numberQuestion}
            />
            <Text style={styles.numberAnswer}>Number Answer</Text>
        </View>
        <Pressable style={{ borderWidth: 1, height: 50, justifyContent: 'center'}} onPress={props.onDelete}><Text>Delete</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  numberSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  numberQuestion: {
    backgroundColor: '#E3E2E6',
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  numberAnswer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
  }
});