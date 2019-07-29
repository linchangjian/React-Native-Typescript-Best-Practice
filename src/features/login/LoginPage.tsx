import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export interface ILoginProps {
}

export interface ILoginState {
}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <View></View>
    );
  }
}

const styles = StyleSheet.create({

});

