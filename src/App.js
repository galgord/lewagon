import React, { Component } from 'react';
import './App.css';
import Categories from './Categories';
import { Button } from 'react-bootstrap';
// import {connect} from 'react-redux'

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
class App extends Component {
  //setting default my state
  state = {
    categoriesVal:"",
    statusVal: "",
    timeChange: "",
    resonVal: info.reason,
    impactVal: true,
    reqVal: false,
    autherVal: info.author
  }
  //changing the state
  setcategoriesVal = (val) => {
      return this.setState({categoriesVal:val})
    }
  setstatusVal = (val) => {
      return this.setState({statusVal:val})
 }
 setTimeChange = (val) => {
  return this.setState({timeChange:val})
}
setResonVal = (val) => {
  return this.setState({resonVal:val})
}
setAutherVal = (val) => {
  return this.setState({autherVal:val})
}

  
  render() {
    return (
      <div className="App">
    <div className="topContainer">
    <Categories header="categories" clicked={this.setcategoriesVal} value={this.state.categoriesVal}></Categories>
    <Categories header="status" clicked={this.setstatusVal} value={this.state.statusVal}/>  
    <Categories header="status change" clicked={this.setTimeChange} value={this.state.timeChange}/>  
    <Categories header="reason" clicked={this.setResonVal} value={this.state.resonVal}/>
    </div>
    <div className="topContainer">
    <Categories header="schedule impact"/>  
    <Categories header="added to req"/>  
    <Categories header="change auther" clicked={this.setAutherVal} value={this.state.autherVal}/>  
    </div>
    <button type="submit">Submit</button>
      </div>
    );
  }
}


// Me trying to use Redux.. not really working.
//  const mapStateToProps = state =>{
//    return{
//     categories: state.categories,
//     status: state.status,
//     statusChange: state.statusChange,
//     reason: state.reason,
//     scheduleImpact: state.scheduleImpact,
//     addedToReq: state.addedToReq,
//     changeAuther: state.changeAuther
//    };
//  }

//  const mapDispatchtoProps = dispatch => {
//    return {
//     onCategorieChange: ()=> dispatch({type:"CATEGORY", payload:Categories.categories.val})
//    };
//  }
// export default connect(mapStateToProps,mapDispatchtoProps)(App);
export default App;
