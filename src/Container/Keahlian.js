import React, { useState } from "react";
import InputLabel from "../Components/InputLabel";

function Keahlian({ handleSubmitForm, skills, handleForm, setskills }) {
  const data = { inputType: "text", inputId: "skillName" };
  const [n_list, setn_list] = useState(1);
  const [numberBox, setnumberBox] = useState([
    <InputLabel
      isAhli
      key={1}
      data={data}
      dataInput={skills}
      handleForm={handleForm}
      setdataInput={setskills}
      n_list={n_list}
    />,
  ]);

  const handleOnClick = () => {
    setn_list(n_list + 1);
    return setnumberBox(
      numberBox.concat(
        <InputLabel
          key={n_list}
          isAhli
          data={data}
          dataInput={skills}
          handleForm={handleForm}
          setdataInput={setskills}
          n_list={n_list + 1}
        />
      )
    );
  };

  return (
    <div className="m-6 space-y-2">
      <div className="bg-gray-200 mx-auto space-y-4 px p-4">
        <div className="grid items-center justify-center justify-items-center space-y-4">
          {numberBox}
          <button
            type="button"
            className="border border-gray-500 py-1 px-4 rounded-lg hover:bg-gray-400 hover:text-white float-right w-full bg-white"
            onClick={() => handleOnClick()}
          >
            + Add another skill
          </button>
        </div>
      </div>
      <button
        type="button"
        className="border border-gray-500 py-1 px-4 rounded-lg hover:bg-gray-400 hover:text-white float-right"
        onClick={(e) => handleSubmitForm(e)}
      >
        Submit
      </button>
    </div>
  );
}

export default Keahlian;
