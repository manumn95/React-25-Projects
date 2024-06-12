import { useState } from "react";
import data from "../components/data";
import "./style.css";
const Accordion = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiSelection, setEnableMultiselection] = useState(false);
  const [multipleId, setMultipleId] = useState([]);
  const handleClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };
  const handleMultipleSelection = (id) => {
    let cpyId = [...multipleId];
    const findIndexOfCurrentId = cpyId.indexOf(id);
    if (findIndexOfCurrentId === -1) cpyId.push(id);
    else cpyId.splice(findIndexOfCurrentId, 1);
    setMultipleId(cpyId);
  };

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiselection(!enableMultiSelection)}>
          Enable MultiSelection &nbsp;
          <span className={enableMultiSelection?'on':'off'}>{enableMultiSelection ? "ON" : "OFF"}</span>
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((item) => {
              return (
                <div key={item.id} className="item">
                  <div
                    className="title"
                    onClick={
                      enableMultiSelection
                        ? () => handleMultipleSelection(item.id)
                        : () => handleClick(item.id)
                    }
                  >
                    <h3>{item.question}</h3>
                    <span>+</span>
                  </div>
                  {selectedId === item.id ||
                  multipleId.indexOf(item.id) !== -1 ? (
                    <div className="content">{item.answer}</div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <div>
              <h1>No data found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
