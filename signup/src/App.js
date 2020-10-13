import React from 'react';
import FormName from "./form";
import './App.css';
import CanvasChart from './CanvasChart';
class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state  = {
      x:'',
      y:'',
      items:[{
        x: "",
        y: ""
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
      x:e.target.value
    
    });
  }

  oninputchange(e){
    this.setState({
      y:e.target.value
    
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
        <div className="col-md-4  mt-3">
        {this.state.items.map((item, idx)=>{
          return (<FormName
          key={idx}
          index={idx}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
          x={item.x}
          y={item.y}
          />)
        })}
        <button type="button " className="btn btn-primary acton" onClick={this.onClickButtonAdder}>Action</button>
        </div>
      </div>
      {this.state.items.map((item, idx)=>{
          return(<CanvasChart  key={idx}
            index={idx}  x={item.x} y={item.y}/>)})}
    </div>
  )
  }


}


export default App;