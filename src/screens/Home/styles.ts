import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    paddingTop: 70,
  },
  image: {
    width: 110,
    height: 32,
    marginBottom: 40,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    padding: 16,
    alignItems: 'center',
  },
  input: {
    display: 'flex',
    padding: 16,
    alignItems: 'center',
    gap: 8,
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    backgroundColor: '#262626',
    color: '#808080',
    // fontFamily: 'Inter', TODO: Add font
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22.4,
  },
  button: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,

    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
  buttonText: {},
  flatList: {
    width: '90%',
    flex: 1,
    marginTop: 20,
  },
});
