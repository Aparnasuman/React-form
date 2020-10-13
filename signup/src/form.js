import React from 'react';

class FormName extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
          x:this.props.x,
          y:this.props.y
        }
    
      }
    
    
      oninputchange=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        
        });
      }
    render(){
        return(
         
               <form>
                 <button type="button" className="close" aria-label="Close" onClick={()=>this.props.deleteItem(this.props.index,{
                                     x: this.state.x,
                                     y: this.state.y  
                 })}>
                 <span aria-hidden="true">&times;</span>
                 </button>
                 <div className="form-group  col=md-6 d-flex">
                 <label className="mr-3 mt-2">x</label>
                 <input type="number" className="form-control" id="form-input1" name="x" value={this.state.x || ''} onChange={this.oninputchange} placeholder="x "></input>
                 <label className="mr-3 ml-1 mt-2" >y</label>
                <input type="number" className="form-control" id="form-input2" name="y"value={this.state.y || ''}  onChange={this.oninputchange}  placeholder="y"></input>
              </div>
              <button type="button" className="btn btn-primary mr-3 ml-4" onClick={()=>this.props.addItem(this.props.index, {
                  x: this.state.x,
                  y: this.state.y
              })}>Submit</button>
               </form>
               
        )
    }

}



export default FormName;