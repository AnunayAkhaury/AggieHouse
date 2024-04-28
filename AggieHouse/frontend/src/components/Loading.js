import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  const rotation = useRef(new Animated.Value(0)).current; // Initial value for rotation: 0

  useEffect(() => {
    startRotation();
  }, []);

  const startRotation = () => {
    rotation.setValue(0); // Reset the rotation to 0
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1, // Rotate from 0 to 1 (360 degrees)
        duration: 1000, // Time in milliseconds to complete the rotation
        useNativeDriver: true, // Use native driver for better performance
      })
    ).start();
  };

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Output range for rotation (0deg to 360deg)
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.spinner,
          { transform: [{ rotate: rotationInterpolate }] },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 50,
    height: 50,
    borderRadius: 25, // Half of the width/height to make it a perfect circle
    borderWidth: 5,
    borderColor: 'brown', // Brown border for the spinner
    borderTopColor: 'transparent', // Transparent border on top to create a loading effect
  },
});

export default LoadingSpinner;
