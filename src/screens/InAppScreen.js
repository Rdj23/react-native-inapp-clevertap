import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CleverTap from 'clevertap-react-native';

const InAppScreen = () => {
  useEffect(() => {
    // 👇 Attach the CleverTap In-App Button Click listener
    CleverTap.addListener(
      CleverTap.CleverTapInAppNotificationButtonTapped,
      (event) => {
        _handleCleverTapEvent(CleverTap.CleverTapInAppNotificationButtonTapped, event);
      }
    );

    // 👇 Optional: clean up on unmount
    return () => {
      CleverTap.removeListener(CleverTap.CleverTapInAppNotificationButtonTapped);
    };
  }, []);

  const _handleCleverTapEvent = (eventName, event) => {
    console.log('CleverTap Event called –', eventName, event);
    // You can add custom actions here based on payload
    // For example: if (event?.customData?.screen === 'checkout') { navigateToCheckout(); }
  };

  const handleShowInApp = () => {
    CleverTap.recordEvent('ShowInAppMessage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trigger In-App Message</Text>
      <TouchableOpacity style={styles.button} onPress={handleShowInApp}>
        <Text style={styles.buttonText}>Show In-App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InAppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
