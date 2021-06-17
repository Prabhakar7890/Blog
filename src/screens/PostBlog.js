import React from 'react';
import { connect } from 'react-redux';
const PostBlog= ({Blog})=>{
     let tdata=Blog.map(x=> (
         <div className="dData">
            <p> Title: {x.title}</p>
             <p>Content: {x.Content}</p>
          </div>
     ))
    
        return(
        <div>

         {tdata}
    </div>
        )
    }
const data =(store)=>{
    return {Blog: store.Blogvalues.Blog}
}
export const PostHoc=connect(data)(PostBlog)
