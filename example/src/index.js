import React from 'react'
import logo from './logo.svg'
import Walk from '../../src/index'

export default class Demo1 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Walk><img src={logo} style={{width:'100%',height: '100%'}}/></Walk>
	}
}