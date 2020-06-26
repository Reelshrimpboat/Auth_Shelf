import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from "../Item/Item"

class ItemList extends Component {

  componentDidMount = () =>{
    this.props.dispatch({
      type: 'GET_LIST'
    })
  }

  render() {
    return (
      <div>
        <h2>Hello from Item List!</h2>
        {this.props.item &&
        this.props.item.map((item)=>
        <Item key={item.id} item={item}/>)}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  item: state.listSaga
});

export default connect(mapStateToProps)(ItemList);