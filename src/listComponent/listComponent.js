import React from 'react'
import './styles.css';

class ListComponent extends React.Component{

    
    render(){
        return(
            <div className="list-item">
                <p className="text">{this.props.data}</p>
                <button className="btn cancel-btn" onClick={()=> this.props.removeItem(this.props.data)} >X</button>
            </div>
        )
    }
}

export default ListComponent