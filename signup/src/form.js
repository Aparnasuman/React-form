import React from 'react';

class FormName extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
          Firstname:this.props.Firstname,
          Lastname:this.props.Lastname
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
                                     Firstname: this.state.Firstname,
                                     Lastname: this.state.Lastname  
                 })}>
                 <span aria-hidden="true">&times;</span>
                 </button>
                 <div className="form-group  col=md-6 d-flex">
                 <label className="mr-3 mt-2">x</label>
                 <input type="number" className="form-control" id="form-input1" name="Firstname" value={this.state.Firstname} onChange={this.oninputchange} placeholder="x "></input>
                 <label className="mr-3 ml-1 mt-2" >y</label>
                <input type="number" className="form-control" id="form-input2" name="Lastname"value={this.state.Lastname}  onChange={this.oninputchange}  placeholder="y"></input>
              </div>
              <button type="button" className="btn btn-primary mr-3 ml-4" onClick={()=>this.props.addItem(this.props.index, {
                  Firstname: this.state.Firstname,
                  Lastname: this.state.Lastname
              })}>Submit</button>
               </form>
               
        )
    }

}



export default FormName;