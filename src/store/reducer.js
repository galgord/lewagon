const initialState = {
    categories: "",
    status:"",
    statusChange: "",
    reason: "",
    scheduleImpact: false,
    addedToReq: true,
    changeAuther:""
  }
const reducer = (state = initialState,action) =>{
    switch (action.type){
        case "CATEGORY":
            return{
                categories: action.payload
            }
            break;
            default:
                return state
            }
}

export default reducer