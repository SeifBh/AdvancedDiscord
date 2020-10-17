import React from 'react'
import { useDispatch } from 'react-redux';
import "./SidebarChannels.css";
import {setChannelInfo} from "./features/appSlice";

function SidebarChannels({id,channelName}) {
    const dispatch=useDispatch();
    return (
        <div className="sidebarChannels" onClick={()=>dispatch(
            setChannelInfo({
                channelId:id,
                channelName:channelName,
            })
        )}>
            <h3><span className="sidebarchannels__hash">#</span>{ channelName}</h3>
            
        </div>
    )
}

export default SidebarChannels
