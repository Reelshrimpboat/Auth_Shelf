import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {

  deleteButton = () => {
      console.log('delete pressed, item id:', this.props.item.id)
      this.props.dispatch({
          type: 'DELETE',
          payload: this.props.item.id
      })
  }

  render() {
    return (
      <div className="shelfItem">
        <img src={this.props.item.image_url} alt={this.props.item.description} className="itemImage"></img>
        <p>{this.props.item.description}</p>
        {this.props.item.user_id === this.props.user.id &&
        <button onClick={this.deleteButton}>Delete</button>}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Item);