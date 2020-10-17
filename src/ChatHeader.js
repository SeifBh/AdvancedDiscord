import React from 'react'
import "./ChatHeader.css";
import NotificationsIcon from  "@material-ui/icons/Notifications";
import EditLocaltionRoundedIcon from  "@material-ui/icons/EditLocationRounded";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchRoundedIcon from  "@material-ui/icons/SearchRounded";
import SendRoundedIcon from  "@material-ui/icons/SendRounded";
import HelpRoundedIcon from  "@material-ui/icons/HelpRounded";




function ChatHeader({channelName}) {
    return (
        <div className="chatheader">
          
            <div className="chatheader__left">
                <h3><span className="chatheader__hash">#</span>{channelName}</h3>

            </div>
            <div className="chatheader__right">
                <NotificationsIcon/>
                <EditLocaltionRoundedIcon/>
                <PeopleAltIcon/>

                <div className="chatheader__search">
                    <input placeholder="search"/>
                    <SearchRoundedIcon/>

                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>

            </div>

            
        </div>
    )
}

export default ChatHeader
