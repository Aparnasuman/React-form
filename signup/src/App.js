import React from 'react';
class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state  = {
      Firstname:'',
      Lastname:'',
      items:[]
    }

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
        <div className="col-md-4 col=md-6">
           <form>
             <div className="form-group">
             <label >FirstName</label>
             <input type="text" className="form-control" id="form-input1" onChange={(e)=>this.onhandlechange(e)} placeholder="FirstName "></input>
          </div>
            <div className="form-group">
            <label >LastName</label>
            <input type="text" className="form-control" id="form-input2" onChange={(e)=>this.oninputchange(e)}  placeholder="LastName"></input>
             </div>
             <button type="button" className="btn btn-primary mr-3" onClick={this.addItem}>Submit</button>
             <button type="button" className="btn btn-primary">Action</button>
           </form>
        </div>
      </div>
       
    </div>
  )
  }


}


export default App;