import React from 'react';

const MessagesSidebar = () => {
    const User = () =>{
        return(
        <div className="MessagesSidebar__User">
            <div className="MessagesSidebar__User__Image">
  
            </div>
            <div className="MessagesSidebar__User__Text">
                <h3>Sujan kapali</h3>
                <div className="MessagesSidebar__User__Text__ChatInfo">
                    <p>Sujan: Hello world</p>
                    <p>37 mins ago</p>
                </div>
            </div>
        </div>
        )
    }
  return (
  <div className="MessagesSidebar">
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>

  </div>);
};

export default MessagesSidebar;

