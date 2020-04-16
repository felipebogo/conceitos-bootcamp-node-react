import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';

import api from './sevices/api';

export default function App() {
  const [projects, setProject] = useState([]);

  async function handleAddProject() {
    const response = await api.post('projects',{
      title: `Projeto teste ${Date.now()}`,
      owner: 'Felipe Bogo'
    });

    setProject([... projects, response.data]);
  }

  useEffect(() => {
    console.log('antes');
    api.get('projects').then((response) => {
      console.log('foi');
      console.log(response.data)
      setProject(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container} >
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.title} >{project.title}</Text>
          )}
        />

        <TouchableOpacity onPress={handleAddProject} activeOpacity={0.6} style={styles.button}>
          <Text style={styles.buttonText} > Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20
  }
});