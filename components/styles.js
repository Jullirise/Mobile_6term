import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#b2dfdb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#004d40',
  },
  input: {
    height: 40,
    borderColor: '#26c6da',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  noteContainer: {
    marginBottom: 16,
  },
  noteCard: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#26c6da',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#00796b',
  },
  noteContent: {
    fontSize: 16,
    color: '#004d40',
  },
  addButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
