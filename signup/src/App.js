import React from 'react';
import FormName from "./form";
import './App.css';
class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state  = {
      Firstname:'',
      Lastname:'',
      items:[{
        Firstname: "",
        Lastname: ""
      }],
     
    }

  }

  onClickButtonAdder=()=> {
    const itm = [...this.state.items]
    itm.push({});
    this.setState({
items: itm
    });
  }
  deleteItem=(index)=> {
    let items = [...this.state.items];
    items.splice(index , 1);
    this.setState({ items });
    console.log(items)
  }
  onhandlechange(e){
    this.setState({
      Firstname:e.target.value
    
    });
  }

  oninputchange(e){
    this.setState({
      Lastname:e.target.value
    
    });
  }
addItem=(index, value)=>{
  let items =this.state.items;
  items[index] = value;
  this.setState({
  items
  })
  console.log(items);
}
  render(){
  return(
    <div className="container ">
      <div className="row justify-content-md-center">
        <h1>ToDo List</h1>
        <div className="col-md-4  mt-3">
        {this.state.items.map((item, idx)=>{
          return (<FormName
          key={idx}
          index={idx}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          Firstname={item.Firstname}
          Lastname={item.Lastname}
          />)
        })}
        <button type="button " className="btn btn-primary acton" onClick={this.onClickButtonAdder}>Action</button>
        </div>
      </div>
       
    </div>
  )
  }


}


export default App;