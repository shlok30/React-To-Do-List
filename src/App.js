import React from 'react';
import ListComponent from './listComponent/listComponent'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      data:[],
      search:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleChange(event){
      
      this.setState(
        {
          search:event.target.value
        }
      )
  }

  handleClick(event){
    const item = document.querySelector("#add").value
    const arr = this.state.data
    arr.push(item)
    document.querySelector("#add").value = ""
   // console.log(arr)
    this.setState(
      {
        data:arr
      }
    )
  }

  removeItem(item){
    //console.log(item)
    const newArr = this.state.data.filter((element) => element !== item?element:null)
    //console.log(newArr)
    this.setState(
      {
        data:newArr
      }
    )
    
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <header>
          <h1>To-Do List</h1>
        </header>

        <div className="search-container">
          <input type="text" placeholder="Enter Item To Be Searched"  onChange={this.handleChange} ></input>
        </div>

        <div className="add-container" id="adc">
          <div class="text-div">
            <input type="text" placeholder="Enter Task To Add"  id="add"></input>
          </div>
          <div class="btn-div">
            <button className="add-btn btn" onClick={this.handleClick}>Add</button>
          </div>
        </div>

        <div className="list-container">
          {this.state.data.map((element,key) => 
          {
            if(this.state.search === ""){
              return(
              <ListComponent data = {element} key={key} removeItem={this.removeItem}/>
            )
            }

            else{
              if(element.indexOf(this.state.search) !== -1){
                return(
                  <ListComponent data={element} key={key} removeItem={this.removeItem} />
                )
              }
            }
            
          })}
        </div>
      </div>
    )
  }
}

export default App
