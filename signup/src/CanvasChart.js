import React from 'react';

class CanvasChart  extends React.Component{
  constructor(props){
        super(props);
        this.state  = {
          x:this.props.x,
          y:this.props.y
        }
    
      }
    componentDidUpdate(){
        var chart = new window.CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title:{
              text: "Simple Line Chart"
            },
            data: [{        
              type: "line",
                  indexLabelFontSize: 16,
              dataPoints: [
                {y:this.state.y,x:this.state.x}
              ]
          
            }]
          
          }
         
          );
          chart.render();
          console.log(this.state.y);
          console.log(this.state.x);
          
   
    }
    render(){
        return(
            <div id="chartContainer" style={{height: "300px", width: "100%"}}></div>
        )
    }


}
export default CanvasChart;