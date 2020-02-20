import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {MenuItem,InputLabel,FormControl,Select,TextField, Switch} from '@material-ui/core';

// JSON File to get the info from
const info = {
  categories: ['You', 'can', 'do', 'it'],
  status: ['positive', 'negative', 'undecided'],
  status_change: '20/11/2020',
  reason: 'Unclear',
  schedule_impact: false,
  added: true,
  author: 'Ron Burgundy',
}

// Creating the Component
class Categories extends Component {

 // a method to help handle state.
 handleChange = event => {
  this.props.clicked(event.target.value);
  };

// A helper method to help display what JSX gets returned to the App.js file
decideWhatToShow = () => {
 
    switch (this.props.header){
      case "categories": 
      return <FormControl>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        value = {this.props.value}
        displayEmpty 
        onChange={this.handleChange}
        autoWidth
        
      >
        <MenuItem value="" disabled>Choose a category</MenuItem>
        <MenuItem value="You">You</MenuItem>
        <MenuItem value='can'>can</MenuItem>
        <MenuItem value='do'>do</MenuItem>
        <MenuItem value='it'>it</MenuItem>
      </Select>
    </FormControl>
        case "status":
        return <FormControl>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          value = {this.props.value}
          displayEmpty 
          onChange={this.handleChange}
          autoWidth
        >
          <MenuItem value="" disabled>Choose a status</MenuItem>
          <MenuItem value="positive">positive</MenuItem>
          <MenuItem value='negative'>negative</MenuItem>
          <MenuItem value='undecided'>undecided</MenuItem>
        </Select>
      </FormControl>
      case "status change": 
      return <form>
      <TextField
        value={this.props.value}
        onChange={this.handleChange}
        id="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
      case "reason": 
      return  <form autoComplete="off">
      <TextField className="TextField" placeholder={this.props.value} variant="outlined" type="text" onChange={this.handleChange}
/>
    </form>
      case "schedule impact":
        return(
          <div className="radioDiv">
          <label className="label" >
        <input type="radio" name="impact" className="radio" value="Yes"
          checked={this.props.value === "Yes"} onChange={this.handleChange}
        />Yes</label>
         <label className="label" >
        <input type="radio" name="impact" className="radio" value="No"
          checked={this.props.value === "No"} onChange={this.handleChange}
        />No</label>
          </div>
        )


      case "added to req": 
        return (
          <div className="radioDiv">
          <label className="label" >
        <input type="radio" name="req" className="radio" value="Yes"
          checked={this.props.value === "Yes"} onChange={this.handleChange}
        />Yes</label>
         <label className="label" >
        <input type="radio" name="req" className="radio" value="No"
          checked={this.props.value === "No"} onChange={this.handleChange}
        />No</label>
          </div>
        )
      case "change auther":
        return <form autoComplete="off">
        <TextField className="TextField" placeholder={this.props.value} variant="outlined" type="text" onChange={this.handleChange} />
      </form>
      default: return
    }
  }
  render(){
return(
    <div className="box">
      <p className="text">{this.props.header}</p>
        {this.decideWhatToShow()}
    </div>
    )
}
}

export default Categories;