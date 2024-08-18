'use client'

import store from '@/store'
import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'

function ReduxProvider({children,getSession}) {
  return (
    <Provider store={store}>
        <Header getSession={getSession}/>
        {children}
    </Provider>
  )
}

export default ReduxProvider
