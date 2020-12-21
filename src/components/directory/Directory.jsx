import React, {useContext} from "react";
import MenuItem from "../menu-item/MenuItem"
import {DirectoryContext} from "../../contexts/directory/directoryContext";
import './Directory.scss'

export const Directory = () => {
    const {sections} = useContext(DirectoryContext)

    return (
        <div className='directory-menu'>
            {sections.map(
                ({id, ...restProps}) => <MenuItem key={id} {...restProps} />
            )}
        </div>
    )
}
