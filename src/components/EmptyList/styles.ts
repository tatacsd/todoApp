import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: '#808080',
    borderTopWidth: 1,
  },
  image: {},
  text: {
    marginTop: 16,
    color: '#808080',
    textAlign: 'center',
    // fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.6,
  },
  subtext: {
    color: '#808080',
    textAlign: 'center',
    // fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.6,
  },
});
