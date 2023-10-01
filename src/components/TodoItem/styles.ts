import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#262626',
    shadowColor: '#000',
    marginBottom: 8,
  },
  checkButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkImg: {
    width: 17.455,
    height: 17.455,
    flexShrink: 0,
  },

  text: {
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.6,
  },
  binImg: {
    height: 14,
    width: 12.478,
    flexShrink: 0,
    margin: 9,
  },
});
