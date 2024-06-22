import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const NoteItem = ({ title, content, onDelete }) => {
  return (
    <TouchableOpacity style={styles.noteCard} onPress={onDelete}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text style={styles.noteContent}>{content}</Text>
    </TouchableOpacity>
  );
};

export default NoteItem;
