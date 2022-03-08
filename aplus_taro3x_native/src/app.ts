import { Component } from "react";
import Taro from "_@tarojs_taro@3.3.17@@tarojs/taro";
import "./app.less";

class App extends Component {
  // constructor() {
  //   super(props)
  //   this.state = {
  //     //
  //   }
  // }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
