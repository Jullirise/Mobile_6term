import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform, Vibration, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteItem from '../components/NoteItem';
import styles from '../components/styles';

const NoteListScreen = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const notesData = await AsyncStorage.getItem('notes');
      if (notesData) {
        setNotes(JSON.parse(notesData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveNotes = async (updatedNotes) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.error(error);
    }
  };

  const addNote = () => {
    if (!newNoteTitle || !newNoteContent) {
      Alert.alert("Ошибка", "Пожалуйста, введите заголовок и содержание заметки.");
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title: newNoteTitle,
      content: newNoteContent,
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
    setNewNoteTitle('');
    setNewNoteContent('');

    // Вибрация при добавлении новой заметки
    if (Platform.OS === 'android') {
      Vibration.vibrate(100);
    } else if (Platform.OS === 'ios') {
      // Вибрация на iOS
      const HapticFeedback = require('react-native-haptic-feedback');
      HapticFeedback.trigger('impactLight');
    }
  };

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Заметки</Text>
      <TextInput
        style={styles.input}
        placeholder="Заголовок заметки"
        value={newNoteTitle}
        onChangeText={setNewNoteTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Содержание заметки"
        value={newNoteContent}
        onChangeText={setNewNoteContent}
      />
      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.addButtonText}>Добавить</Text>
      </TouchableOpacity>
      <ScrollView style={styles.noteContainer}>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            content={note.content}
            onDelete={() => removeNote(note.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NoteListScreen;