import React from "react";
import InputLabel from "./InputLabel";

function BoxInput({ data, handleForm, dataInput, setdataInput, key, n_list }) {
  return (
    <div
      className="bg-white p-4 space-y-4 my-6"
      style={{ width: "100%", height: "100%" }}
    >
      {data.map((obj) => {
        return (
          <>
            <InputLabel
              key={obj.index}
              data={obj}
              handleForm={handleForm}
              dataInput={dataInput}
              setdataInput={setdataInput}
              n_list={n_list}
              isPersonal
            />
          </>
        );
      })}
    </div>
  );
}

export default BoxInput;
