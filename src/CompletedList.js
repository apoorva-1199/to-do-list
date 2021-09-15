import React from 'react';
import CompletedListItem from './CompletedListItem';

class CompletedList extends React.Component {
    
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <CompletedListItem key={index} item={item} index={index}  deleteCompletedItem = {this.props.deleteCompletedItem} />
      );
    });

    return (<>
      <h4>Completed Items: {items.length}</h4>
      <ul className="list-group"> {items} </ul>
      </>
    );
  }
}

export default CompletedList;
