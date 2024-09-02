import React, { useState } from "react"
import { CollectionType, DataProps } from "./data";
import DownArrow from "./icons/down_arrow";
import ListIcon from "./icons/list_icon";
import SpaceIcon from "./icons/space_icon";
import FolderIcon from "./icons/folder_icon";
interface FolderContainer{
    uuid: string,
    collectionType:CollectionType |string,
    name: string,
    childrens: DataProps[]
}
const FolderContainer=(props:FolderContainer)=>{
    const {uuid,collectionType,name,childrens}=props;
    const [showSubFolders,setShowSubFolders]=useState(false)
  const handleFolderClick=()=>{
    setShowSubFolders(!showSubFolders)
  }
    if(collectionType===CollectionType.LIST){
        return (
            <div className="fileContainer">
                <ListIcon/>
               <span> {name}</span>
            </div>
        )
    }
    else{
        return(
        <div className="folderWrapper">
            <button onClick={handleFolderClick} className="button">
                <RenderIcons  collectionType={collectionType} isSubStructureVisible={showSubFolders} />
                <span className="folderAndSpaceName">{name}</span>
            </button>
            <div className={showSubFolders?"childrensContainer":"hideChildrens"}>
                { childrens.map((item)=>{
                    return (
                <div>
                    <FolderContainer uuid={item.uuid} collectionType={item.collection_type} childrens={item.children} name={item.name}/>
                </div>
            )
        })}
      </div>
        </div>
    )
      
    }
   

}



// Below Are the helper components which are made for ease of readability and in larger projects it can be transferred to separate files
interface RenderIcons{
    collectionType:CollectionType|string;
    isSubStructureVisible:boolean;
}
const RenderIcons=(props:RenderIcons)=>{
    const {collectionType, isSubStructureVisible}=props
    if(collectionType===CollectionType.SPACE){
     return (
        <span className="icons">
            <DownArrowContainer isSubStructureVisible={isSubStructureVisible}/>
            <SpaceIcon/>
        </span>
     )
    }

    if(collectionType===CollectionType.FOLDER){
        return (
            <div  className="icons">
                <DownArrowContainer isSubStructureVisible={isSubStructureVisible}/>
                <FolderIcon/>
            </div>
         )
    }
    else{
        return <></>
    }

}

const DownArrowContainer=(props:{isSubStructureVisible:boolean})=>{
    const {isSubStructureVisible}=props
    return (
        <div className={!isSubStructureVisible ?"rotate_180":"rotate_0"}>
          <DownArrow/>
        </div>
    )
}

export default FolderContainer;