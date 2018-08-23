import React,{Component,Fragment} from 'react';
import Item from './item.js';
import axios from 'axios';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			value:'',
			list:['aaa','bbb']
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDelete = this.handleDelete.bind(this)

	}

	static getDerivedStateFromProps(props, state){
		console.log('app getDerivedStateFromProps...')
		return 111
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('app shouldComponentUpdate...')
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('app getSnapshotBeforeUpdate...')
		return 'aa'
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('app componentDidUpdate...')
		
	}

	componentDidMount(){
		axios
		.get('http://127.0.0.1:3000/api/add')
		.then((data)=>{
			this.setState({
				list:data.data
			})
				
			
		})
	}


	handleAdd(){
		// this.setState({
		// 	list:[...this.state.list,this.state.value],
		// 	value:''
		// })

		this.setState((preState)=>({
			list:[...preState.list,preState.value],
			value:''
		}),()=>{
			// console.log(this.url.querySelectorAll('li'))
		})

	}
	handleChange(e){
		// this.setState({
		// 	value:e.target.value
		// })
	const value = this.input.value;
		this.setState((preState)=>({
				value

			}))
	}
	handleDelete(index){
		// const list = [...this.state.list];
		//  //删除 
		// list.splice(index,1)
		// this.setState({
		// 	list:list
		// })
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState((preState)=>({
			list
		}))

	}
	getItem(){
		return this.state.list.map((item,index)=>{
					// return <li key={index} onClick={this.handleDelete.bind(this,index)}>{ item }</li>
					return <Item
						 key={index}
					 	 content={item}
					 	 index = {index}
					 	 handleDelete = {this.handleDelete}
					 />
				})
	}
	render(){
		console.log('App render....')
		return(
			/*
			<Fragment>
				<input />
				<button>提交</button>
			</Fragment>
			*/
			<div>
				<input 
					value={this.state.value} 
					onChange={this.handleChange}
					ref = {(input)=>{
						this.input = input
						}
					}
				/>
				<button 
					onClick={this.handleAdd}
					>增加
				</button>
				<ul 
					ref = {(url)=>{
						this.url = url 
					  	}
					}
				>{
					this.getItem()
				}
				</ul>
			</div>

		)
	}
}
export default App;
