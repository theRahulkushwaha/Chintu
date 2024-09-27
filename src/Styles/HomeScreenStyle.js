import {StyleSheet, Text} from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#111826',
    justifyContent: 'space-between',
  },

  Headers: {
    height: '13%',
    width: '100%',
    backgroundColor: '#1f2a38',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  HeaderText: {
    fontFamily: 'Calibri',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: '7%',
  },

  Headervoice: {
    height: '50%',
    width: '10%',
    // backgroundColor: 'white',
    margin: '5%',
  },

  Icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    tintColor: 'white',
  },

  Body: {
    alignItems: 'center',
    margin: '5%',
    justifyContent: 'center',
  },

  BodyItems: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    backgroundColor: '#1f2a38',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  BodyItemsImage: {
    height: '45%',
    width: '15%',
    //   backgroundColor: 'red',
    marginRight: '5%',
  },

  BodyItemsText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Calibri',
  },

  Footer: {
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    backgroundColor: '#1f2a38',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // bottom: '0%',
  },

  FooterIcon: {
    height: '60%',
    width: '50%',
    // backgroundColor: '#111826',
  },
});

export default HomeScreenStyle;
