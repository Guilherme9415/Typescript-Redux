import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import { store } from  './src/app/store';
import Counter from './src/Componets/Counter';
import ButtonRedux from './src/Componets/ButtonRedux';


export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter/>
        <ButtonRedux/>
      </SafeAreaView>
    </Provider>
  )
}

