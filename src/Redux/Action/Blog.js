export const storeBlogApi=(title,Content)=>{
    return {
       type: "ADD_BLOG",
       data: {title:title,Content:Content}
    }
  
  } 