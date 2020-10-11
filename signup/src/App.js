import React from 'react';
class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state  = {
      Firstname:'',
      Lastname:'',
      items:[],
      fields:[""]
    }

  }

  onClickButtonAdder=()=> {
    this.setState({
      fields: ["", ...this.state.fields]
    });
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
addItem=()=>{
  let items =this.state.items;
  items.push([this.state.Firstname, this.state.Lastname]);
  this.setState({
  items
  })
console.log(items)
}
  render(){
  return(
    <div className="container ">
      <div className="row justify-content-md-center">
        <div className="col-md-4  mt-3">
        {this.state.fields.map((value, index) => (<form    value={value}
            key={index}>
             <div className="form-group  col=md-6 d-flex">
             <label className="mr-3">x</label>
             <input type="text" className="form-control" id="form-input1" onChange={(e)=>this.onhandlechange(e)} placeholder="x "></input>
          </div>
            <div className="form-group col=md-6 d-flex">
            <label className="mr-3" >y</label>
            <input type="text" className="form-control" id="form-input2" onChange={(e)=>this.oninputchange(e)}  placeholder="y"></input>
             </div>
           </form>
            ))}
           <button type="button" className="btn btn-primary mr-3 ml-4" onClick={this.addItem}>Submit</button>
             <button type="button" className="btn btn-primary" onClick={this.onClickButtonAdder}>Action</button>
        </div>
      </div>
       
    </div>
  )
  }


}


export default App;