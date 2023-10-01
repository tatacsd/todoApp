import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface TodoItemProps {
  title: string;
  isDone: boolean;
  onDelete: () => void;
  onComplete: (id: string, isDone: boolean) => void;
  id: string;
}

export function TodoItem({
  title,
  isDone,
  onDelete,
  onComplete,
  id,
}: TodoItemProps) {
  const [imageCheck, setImageCheck] = useState(isDone);
  const imageCheckURL = require('../../../assets/check.png');
  const imageUncheckURL = require('../../../assets/uncheck.png');
  const handleCheck = () => {
    setImageCheck(!imageCheck);
    imageCheck ? onComplete(id, true) : onComplete(id, false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkButton} onPress={handleCheck}>
        <Image
          style={styles.checkImg}
          source={imageCheck ? imageCheckURL : imageUncheckURL}
        />
      </TouchableOpacity>
      <Text
        onPress={handleCheck}
        style={{
          textDecorationLine: imageCheck ? 'line-through' : 'none',
          color: imageCheck ? '#6b6b6b' : '#fff',
          flex: 1,
          marginRight: 8,
          marginLeft: 8,

          //   fontFamily: 'Inter',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 19.6,
        }}
      >
        {title}{' '}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Image
          style={styles.binImg}
          source={require('../../../assets/bin.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
