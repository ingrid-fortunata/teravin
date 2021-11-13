import React from "react";

function InputLabel({
  data,
  isAhli,
  handleForm,
  dataInput,
  setdataInput,
  isPersonal,
  key,
  n_list,
}) {
  // console.log("key", n_list);
  return (
    <div className="flex justify-between items-center">
      {!isAhli && <div>{data.labelTitle}</div>}
      <input
        key={key}
        type={data.inputType}
        id={isPersonal ? data.inputId : n_list}
        n_list={n_list}
        onChange={(e) => handleForm(e, dataInput, setdataInput)}
        className="border border-gray-700 rounded-md outline-none px-4 py-px"
      />
    </div>
  );
}

export default InputLabel;
