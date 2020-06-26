import React, {Component} from 'react'
import './ItemForm.css'
class ItemForm extends Component{
    state ={
        description:'',
        url:''
    }
    handleChange=(event, type)=>{
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    firePayload=()=>{
        this.dispatch({type:'ADD_ITEM', payload:{description:this.state.description, url:this.state.url}})
        console.log(this.state)
        this.setState({
            description:'',
            url:''
        })
    }
    addToShelf=()=>{
        this.state.description && this.state.url ?
        this.firePayload()
        :
        alert('Please fill out the form before adding to the shelf! :)')
    }
    render(){
        return(
            <div className='wrapper'>
            <h3>Want to add your own item?</h3>
            <label htmlFor='desc'>Item Description:</label>
            <input value={this.state.description} id='desc' placeholder='Item Description' onChange={(event)=>this.handleChange(event, 'description')}/>
            <br/>
            <br/>
            <label htmlFor='url'>Item Image url:</label>
            <input value={this.state.url} id='url' placeholder='Item Image URL' onChange={(event)=>this.handleChange(event, 'url')}/>
            <br/>
            <br/>
            <button onClick={this.addToShelf}>Add To Shelf</button>
            </div>
        )
    }
}

export default ItemForm;