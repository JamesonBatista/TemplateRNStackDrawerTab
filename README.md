# Template React-Native 0.62

Tamplate with, StackNavigator, Drawer Navigator, Tab Navigator.

Icons whit image.



Bottom Elevation effect

  const NeuMorph = ({children, size, style}) => {
    return (
      <View style={styles.topShadown}>
        <View style={styles.bottomShadown}>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}>
            {children}
          </View>
        </View>
      </View>
    );
  };
  
    inner: {
    backgroundColor: '#dee9f7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e2ecfd',
    borderWidth: 1,
  },
  topShadown: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#fff',
    marginTop: 20,
  },
  bottomShadown: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#343434',
  },
