import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BoxInput from "../Components/BoxInput";

function PengalamanKerja({ handleActiveForm }) {
  const data = [
    {
      id: 1,
      labelTitle: "Nama Institusi",
      inputType: "text",
      inputId: "",
    },
    {
      id: 2,
      labelTitle: "Periode",
      inputType: "text",
      inputId: "",
    },
    {
      id: 3,
      labelTitle: "Posisi",
      inputType: "text",
      inputId: "",
    },
    {
      id: 4,
      labelTitle: "Detail Pekerjaan",
      inputType: "number",
      inputId: "",
    },
  ];

  const [numberBox, setnumberBox] = useState([
    <BoxInput data={data} key={1} />,
  ]);

  const handleOnClick = () => {
    return setnumberBox(
      numberBox.concat(<BoxInput key={numberBox.length} data={data} />)
    );
  };

  return (
    <div className="m-6">
      <div className="bg-gray-200 mx-auto space-y-4 px w-full p-4">
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 flex flex-col items-center justify-center justify-items-center">
          {numberBox}
          <button
            type="button"
            className="bg-white flex items-center justify-center"
            style={{ width: "80%", height: "100%" }}
            onClick={() => handleOnClick()}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <button
        type="button"
        className="border border-gray-500 py-1 px-4 rounded-lg hover:bg-gray-400 hover:text-white float-right bg-white my-6"
        onClick={() => handleActiveForm(4)}
      >
        Next
      </button>
    </div>
  );
}

export default PengalamanKerja;
