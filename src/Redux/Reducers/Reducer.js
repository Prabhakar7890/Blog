export const BlogReducer = (state={Blog:[]},action)=>{

    switch(action.type){
        case "BLOG_ACTION":
            return {Blog:action.records}
        default:
            return state;
    }
  } 