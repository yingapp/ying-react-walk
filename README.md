
基于 react 的 游走组件, [在线 demo](https://yingapp.github.io/ying-react-walk/)

## Installation

```bash
npm install ying-react-walk --save
```

## Usage

```javascript
import React from 'react'
import Walk from 'ying-react-walk'

class Demo extends React.Component {
  onChange(pos){
	  console.log(pos);
  }
  render() {
      return (<Walk onChange={this.onChange}>您好！</Walk>)
   }
}
```

## API

对于游走组件可以设置一些自定义属性，具体如下：

| 属性 | 说明 | 类型 | 返回值 |
| ----- | ---- | ----- | ------- |
| onChange | 位置回调 | function | {X，Y} |

## License

MIT
