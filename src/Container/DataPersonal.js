import React from "react";
import InputLabel from "../Components/InputLabel";

function DataPersonal({
  handleActiveForm,
  handleForm,
  dataPersonal,
  setdataPersonal,
}) {
  const data = [
    {
      id: 1,
      labelTitle: "Nama",
      inputType: "text",
      inputId: "nama",
    },
    {
      id: 2,
      labelTitle: "Email",
      inputType: "email",
      inputId: "email",
    },
    {
      id: 3,
      labelTitle: "No. HP",
      inputType: "number",
      inputId: "hp",
    },
    {
      id: 4,
      labelTitle: "Alamat",
      inputType: "text",
      inputId: "alamat",
    },
  ];
  return (
    <div className="w-full mx-auto space-y-4">
      <div className="bg-gray-200 p-4 space-y-4">
        {data.map((obj, idx) => {
          return (
            <React.Fragment key={idx}>
              <InputLabel
                data={obj}
                handleForm={handleForm}
                dataInput={dataPersonal}
                setdataInput={setdataPersonal}
                isPersonal
              />
            </React.Fragment>
          );
        })}
      </div>

      <button
        type="button"
        className="border border-gray-500 py-1 px-4 rounded-lg hover:bg-gray-400 hover:text-white float-right"
        onClick={() => handleActiveForm(2)}
      >
        Next
      </button>
    </div>
  );
}

export default DataPersonal;
