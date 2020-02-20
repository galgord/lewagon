import React, { Component } from 'react';
import './App.css';
import Categories from './Categories';
import axios from 'axios'

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
    impactVal: "No",
    reqVal: "Yes",
    autherVal: info.author
  }
  //Saving the new state
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
setImpactVal = (val) => {
  return this.setState({impactVal:val})
}
setReqVal = (val) => {
  return this.setState({reqVal:val})
}
postForm = () => {
const formAnswers = {
  categoriesVal: this.state.categoriesVal,
    statusVal:  this.state.statusVal,
    timeChange: this.state.timeChange,
    resonVal: this.state.resonVal,
    impactVal: this.state.impactVal,
    reqVal: this.state.resonVal,
    autherVal: this.state.autherVal
}
axios.post(`http://localhost:3000/Answers`, { formAnswers })
.then(res => {
  console.log(res);
  console.log(res.data);
}).catch(e =>{
  console.log(e)
})
alert("Form Submitted Successfully")
window.location.reload();
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
    <Categories header="schedule impact" clicked={this.setImpactVal} value={this.state.impactVal}/>  
    <Categories header="added to req" clicked={this.setReqVal} value={this.state.reqVal}/>  
    <Categories header="change auther" clicked={this.setAutherVal} value={this.state.autherVal}/>  
    </div>
    <div className="btnDiv">  
    <button className="button" onClick={this.postForm}>Submit</button>
    </div>
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
