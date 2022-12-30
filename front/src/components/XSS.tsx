import React, { useState } from "react";

const XSS = () => {
  const [list, setList] = useState<string[]>(["Yugaalh"]);
  const [l, setL] = useState<string>("");
  const handleClick = () => {
    setList([...list, l]);
    setL("");
  };
  return (
    <div>
      XSS
      {/* <img src="hell!jpg" onError={()=>alert('Hacked')}/> */}
      {list.map((l) => (
        <div dangerouslySetInnerHTML={{ __html:l }}/>
      ))}
      <br />
      <input value={l} onChange={(e) => setL(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default XSS;
