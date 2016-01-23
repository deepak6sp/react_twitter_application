var React = require("react");
var ReactDom =  require("react-dom");


var SomeReact = React.createClass({


	getInitialState:function(){
		return {
			isHeader : true,
			title:"my only first application",
			count:0,
			divDisplay: "displayBlock"
		};
	},
	changeHandle: function(){
		this.setState({
			isHeader : !this.state.isHeader,
			count : this.state.count + 1
		});
	},
	render :function(){
		if(!this.state.isHeader){
			this.state.divDisplay = "hideBlock"
		}
		else{
			this.state.divDisplay = "divDisplay"
		}
		return <div> 
					<div className={this.state.divDisplay}>{this.state.title}</div>
					{this.state.count}
					<button onClick={this.changeHandle} >click to count</button>
				</div>
	} 

});

ReactDom.render(<SomeReact />, document.getElementById("react-application"));