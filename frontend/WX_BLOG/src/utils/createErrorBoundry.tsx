import { View } from '@tarojs/components'
import { Component } from 'react'

export function createErrorBoundary(Page) {
  return class ErrorBoundary extends Component {
    state = {
      hasError: null,
    }

    static getDerivedStateFromError() {
      return {
        hasError: true,
      }
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
    }

    render() {
      return this.state.hasError ? <View>Something went wrong.</View> : <Page />
    }
  }
}
