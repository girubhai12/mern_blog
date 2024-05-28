import {useContext, useState } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import BlogEditor from "../components/blog-editor.component";
import PublishForm from "../components/publish-form.component";

 const Editor = () => {
    const[ editorstate, setEditorState] = useState("editor");

    

     let {userAuth: { access_token} } = useContext(UserContext)
   
     return(
       access_token === null ? <Navigate to="/signin" />
       : editorstate == "editor" ? <BlogEditor />: <PublishForm />

          )

    
    
 }

 export default Editor;