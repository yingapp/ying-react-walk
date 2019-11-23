import React from 'react'

var xon = 0;//图片在x轴移动方向
var yon = 0;//图片在y轴移动方向
var step = 1;     //移动距离

export default class Walk extends React.Component {
	constructor(props) {
		super(props)
		this.state = { X: document.body.clientWidth / 2, Y: document.body.clientHeight / 2 }
	}

	floatP() {
		const { onChange } = this.props
		let { X: xPos, Y: yPos } = this.state
		const { walk: dom } = this.refs
		var width = document.documentElement.clientWidth;//浏览器宽度
		var height = document.documentElement.clientHeight;//浏览器高度
		var Hoffset = dom.offsetHeight;//图片高度
		var Woffset = dom.offsetWidth;//图片宽度

		// dom.style.left = xPos + document.body.scrollLeft;//图片距离浏览器左侧位置
		// dom.style.top = yPos + document.body.scrollTop;//图片距离浏览器顶端位置

		if (yon == 0) {
			yPos = yPos + step;//图片在y轴方向上下移动
		} else {
			yPos = yPos - step;
		}
		if (yPos < 0) {//飘到顶端，沿y轴向下移动
			yon = 0;
			yPos = 0;
		}
		if (yPos >= (height - Hoffset)) {//飘到低端，沿y轴向上移动
			yon = 1;
			yPos = (height - Hoffset);
		}

		if (xon == 0) {//x轴向右移动
			xPos = xPos + step;
		} else {
			xPos = xPos - step;//x轴向左移动
		}

		if (xPos < 0) {//飘到左侧时沿x轴向右移动
			xon = 0;
			xPos = 0;
		}

		if (xPos >= (width - Woffset)) {//飘到右侧时沿x轴向左移动
			xon = 1;
			xPos = (width - Woffset);
		}
		const pos = { X: xPos, Y: yPos }
		if (typeof onChange === 'function') {
			onChange(pos)
		}
		this.setState(pos, () => {
			setTimeout(this.floatP.bind(this), 60);//定时调用。
		})
	}
	componentDidMount() {
		this.floatP();
	}


	render() {
		const { X, Y } = this.state
		const style = {
			position: 'absolute', width: 100, height: 100,
			left: X,
			top: Y,
		}
		const { children } = this.props
		return <div ref='walk' style={style}> {children}</ div>
	}
}
