import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import { EmptyList } from '../../components/EmptyList/indext';
import { InfoBar } from '../../components/InfoBar';
import { TodoItem } from '../../components/TodoItem';
import { styles } from './styles';

export function Home() {
  const [titleInput, setTitleInput] = useState('');
  const [todos, setTodos] = React.useState<
    { id: string; title: string; isDone: boolean }[]
  >([]);
  const [completedAmount, setCompletedAmount] = useState(0);
  const logoImage = require('../../../assets/logo.png');

  const handleTodoAdd = () => {
    if (titleInput === '') return;
    if (todos.map((todo) => todo.title).includes(titleInput)) {
      return Alert.alert('Task already exists');
    }

    setTodos([
      ...todos,
      {
        id: uuid.v4().toString(),
        title: titleInput,
        isDone: false,
      },
    ]);
    setTitleInput('');
  };

  useEffect(() => {
    let counter = 0;
    todos.map((todo) => {
      if (todo.isDone) {
        // count how many todos are completed
        counter += 1;
      }
    });
    setCompletedAmount(counter);
  }, [todos]);
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoImage} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          placeholderTextColor={'#6b6b6b'}
          value={titleInput}
          onChangeText={setTitleInput}
        />

        <TouchableOpacity style={styles.button} onPress={handleTodoAdd}>
          <Text style={styles.buttonText}>
            <Image source={require('../../../assets/plus.png')} />
          </Text>
        </TouchableOpacity>
      </View>
      <InfoBar createdAmount={todos.length} completedAmount={completedAmount} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            title={item.title}
            isDone={item.isDone}
            onDelete={() => handleDelete(item.id)}
            onComplete={() => handleComplete(item.id)}
            id={item.id}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
}
