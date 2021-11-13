import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

function MainTable() {
  const [dataPersonal, setdataPersonal] = useState();
  useEffect(() => {
    setdataPersonal(JSON.parse(localStorage.getItem("dataPersonal")));
  }, []);

  // console.log(dataPersonal);

  const displayBody = (
    <>
      <div className="grid grid-cols-12 border-2 border-gray-200 divide-x divide-gray-200 items-center justify-center text-center">
        <div className="col-span-2">{dataPersonal?.nama}</div>
        <div className="col-span-3">{dataPersonal?.hp}</div>
        <div className="col-span-5">{dataPersonal?.alamat}</div>
        <div className="col-span-2 cursor-pointer">
          <AiOutlineEye />
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="grid grid-cols-12 border-2 border-white divide-x divide-white items-center justify-center bg-gray-200 text-center font-bold">
        <div className="col-span-2">Nama</div>
        <div className="col-span-3">HP</div>
        <div className="col-span-5">Alamat</div>
        <div className="col-span-2" />
      </div>
      {displayBody}
    </div>
  );
}

export default MainTable;
