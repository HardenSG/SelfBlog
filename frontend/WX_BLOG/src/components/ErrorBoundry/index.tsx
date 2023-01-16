import React, { PropsWithChildren } from 'react'
import Error from '../Error/index'

interface ErrorBoundaryProps {
  fallback?: (...args: any[]) => any
}

export default class ErrorBoundary extends React.Component<
  PropsWithChildren<ErrorBoundaryProps>,
  {
    errorInfo: any
  }
> {
  public constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { errorInfo: null }
  }

  public componentDidCatch(error: any, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      errorInfo,
    })
    // You can also log error messages to an error reporting service here
    console.error(error, 121212)
  }

  public render() {
    if (this.state.errorInfo) {
      return <Error />
    }
    // Normally, just render children
    return this.props.children
  }
}
