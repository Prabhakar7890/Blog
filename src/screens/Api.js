import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../screens/Api.css'
const Api= ({blog,storeBlog})=>{
  
    let [title,setTitle]=useState()
    let [content,setContent]=useState()

  return(
<div>
<table className="tbl">
    <tbody className="tb">
                   <tr>
                <td>Title</td>
                <td><input className="input" type="text" onChange={(e)=>setTitle(e.target.value)}
                value={title} placeholder="Enter title"/></td>
            </tr>
            <tr>
                <td>Content</td>
                <td><textarea className="input" type="text" onChange={(e)=>setContent(e.target.value)}
                value={content} placeholder="Text here"/></td>
            
            </tr>
            <tr>
                <td style={{textAlign:'center'}} colSpan="2"> <Link to="/Blog_Display"><button className="btn btn-danger"
                onClick={()=>storeBlog(title,content)}>Post</button></Link></td>
            </tr>
            </tbody>
        </table>
</div>  
  )

}

export default Api 