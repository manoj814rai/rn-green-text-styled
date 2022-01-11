import * as React from 'react'
import { NativeModules, StyleSheet, Text, View } from 'react-native'

export const GreenLabel: React.FC<{label?: string}> = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label ? label : 'I am a red text.....'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  label:{
    color: 'red'
  }
})

export default NativeModules.RNGreenLabelModule
