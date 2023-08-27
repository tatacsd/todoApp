import { Image, Text, View } from 'react-native';
import { styles } from './styles';
export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/Clipboard.png')}
      />
      <Text style={styles.text}>You dont have registered tasks</Text>
      <Text style={styles.subtext}>Add a new taks and organize your day</Text>
    </View>
  );
};
