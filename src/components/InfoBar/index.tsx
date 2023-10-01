import { Text, View } from 'react-native';
import { styles } from './styles';

interface InfoBarProps {
  createdAmount: number;
  completedAmount: number;
}
export const InfoBar = ({ createdAmount, completedAmount }: InfoBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.created}>Created</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{createdAmount}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.completed}>Completed</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{completedAmount}</Text>
        </View>
      </View>
    </View>
  );
};
