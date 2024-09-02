import React from "react"
import "./styles.css";
import {data} from "./data"
import FolderContainer from "./folder-container";
export default function App() {
  console.log("data##",data)
  return (
    <div className="App">
      <p>Frontend Interview Assignment</p>
    <div className="folderChildrenContainer">
    {
        data.map((item)=>{
          const {uuid,collection_type,name,children}=item
          return (
            <FolderContainer key={uuid} uuid={uuid} collectionType={collection_type} name={name} childrens={children}/>
          )
        })
      }
      </div> 
    </div>
  );
}
