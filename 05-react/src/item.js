import React,{ Component } from 'react';
import PropTypes from 'prop-types';
class Item extends Component{
	constructor(props){
		super(props);
		// this.state = {};
		this.handleDelete = this.handleDelete.bind(this)
	}

	// static getDerivedStateFromProps(props, state){
	// 	console.log('Item getDerivedStateFromProps...')
	// 	return 111
	// }
	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('Item shouldComponentUpdate...')
	// 	return true
	// }
	// getSnapshotBeforeUpdate(prevProps, prevState){
	// 	console.log('Item getSnapshotBeforeUpdate...')
	// 	return 'aa'
	// }
	// componentDidUpdate(prevProps, prevState,snapshot){
	// 	console.log('Item componentDidUpdate...')
		
	// }

	// componentDidMount(){
	// 	console.log('Item componentDidMount...')
	// }


	handleDelete(){
		const { handleDelete,index } = this.props;
		handleDelete(index)
	}

	render(){
		console.log('Item render....')
		const { content } = this.props;
		return <li onClick = {this.handleDelete}>{content}</li>
			
	}


}

Item.propTypes = {
	index:PropTypes.number.isRequired,
	content:PropTypes.string,
	handleDelete:PropTypes.func,
	test:PropTypes.string
}
Item.defaultProps = {
	test:'test'
}
export default Item;