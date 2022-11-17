import React, { useState, useEffect } from "react";
import "./Content.css";

import TableData from "./Tabledata";

const getdataFromLs = () => {
  const data = localStorage.getItem("allEntry");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Content = () => {
  const [cost, setCost] = useState(0);
  const [item, setItem] = useState("");

  const [allEntry, setAllentry] = useState(getdataFromLs());

  const handleSubmit = (e) => {
    e.preventDefault();

    const entry = {
      cost,
      item,
      id: new Date().getTime().toString(),
    };
    setAllentry([...allEntry, entry]);
    console.log(allEntry);
    setCost(0);
    setItem("");
  };

  useEffect(() => {
    localStorage.setItem("allEntry", JSON.stringify(allEntry));
  }, [allEntry]);

  

  return (
    <div className="table">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="item">Enter Item Here</label>
        <input
          onChange={(e) => setItem(e.target.value)}
          type="text"
          id="text"
          name="item"
          value={item}
          placeholder="Enter Your Item"
        />
        <br />
        <label htmlFor="cost">Enter Cost Here</label>
        <input
          type="number"
          onChange={(e) => setCost(e.target.value)}
          id="number"
          name="cost"
          value={cost}
          placeholder="Enter Cost Here"
        />
        <br />
        <button className="buttonSubmit" type="submit"><span> ENTER</span></button>
      </form>
      <div className="content">
        <TableData allEntry={allEntry} setAllentry={setAllentry} />
      </div>
    </div>
  );
};

export default Content;
