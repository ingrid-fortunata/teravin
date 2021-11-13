import { data } from "autoprefixer";
import React, { useState } from "react";
import Timeline from "../src/Components/Timeline";
import DataPersonal from "../src/Container/DataPersonal";
import Keahlian from "../src/Container/Keahlian";
import PengalamanKerja from "../src/Container/PengalamanKerja";
import RiwayatPendidikan from "../src/Container/RiwayatPendidikan";

function Submission() {
  const navBar = [
    { id: 1, title: "Data Personal" },
    { id: 2, title: "Riwayat Pendidikan" },
    { id: 3, title: "Pengalaman Kerja" },
    { id: 4, title: "Keahlian" },
  ];
  const [activeForm, setactiveForm] = useState(1);

  const handleActiveForm = (text) => {
    setactiveForm(text);
  };

  const [dataPersonal, setdataPersonal] = useState({
    nama: "",
    email: "",
    hp: "",
    alamat: "",
    // institusiPekerjaan: "",
    // periodePekerjaan: "",
    // posisiPekerjaan: "",
    // detailPekerjaan: "",
    // skill: "",
  });
  const [dataPendidikan, setDataPendidikan] = useState([
    {
      institusiPendidikan: "",
      periodePendidikan: "",
      jurusanPendidikan: "",
      nilaiAkhirPendidikan: "",
    },
  ]);

  const [skills, setskills] = useState({});
  const fixSkills = Object.keys(skills).map((key) => skills[key]);

  function handleForm(e, data, setData) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function handleRiwayat(e) {
    let newData = {};
    // console.log(e.target.value);
    switch (e.target.id) {
      case "institusiPendidikan":
        newData.institusiPendidikan = e.target.value;
        break;
      case "periodePendidikan":
        newData.periodePendidikan = e.target.value;
        break;
      case "jurusanPendidikan":
        newData.jurusanPendidikan = e.target.value;
        break;
      case "nilaiAkhirPendidikan":
        newData.nilaiAkhirPendidikan = e.target.value;
        break;
      default:
        break;
    }

    setDataPendidikan(newData);
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    localStorage.setItem("dataPersonal", JSON.stringify(dataPersonal));
    localStorage.setItem("dataPendidikan", JSON.stringify(dataPendidikan));
    localStorage.setItem("dataKeahlian", JSON.stringify(fixSkills));

    window.location.href = "/";
  }
  // console.log("dataPendidikan", dataPendidikan);
  // console.log("skill", fixSkills);
  // console.log("personal", dataPersonal);

  let displayBody;
  switch (activeForm) {
    case 1:
      displayBody = (
        <DataPersonal
          handleActiveForm={handleActiveForm}
          handleForm={handleForm}
          dataPersonal={dataPersonal}
          setdataPersonal={setdataPersonal}
        />
      );
      break;
    case 2:
      displayBody = (
        <RiwayatPendidikan
          handleActiveForm={handleActiveForm}
          handleForm={handleRiwayat}
          dataPendidikan={dataPendidikan}
          setDataPendidikan={setDataPendidikan}
        />
      );
      break;
    case 3:
      displayBody = <PengalamanKerja handleActiveForm={handleActiveForm} />;
      break;
    case 4:
      displayBody = (
        <Keahlian
          handleActiveForm={handleActiveForm}
          handleSubmitForm={handleSubmitForm}
          handleForm={handleForm}
          skills={skills}
          setskills={setskills}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="space-y-2 m-2 text-xs" style={{ minWidth: "350px" }}>
      <h1 className="font-bold">Form submission</h1>
      <div className="flex flex-col justify-center space-y-2">
        <Timeline data={navBar} activeForm={activeForm} />
        {displayBody}
      </div>
    </div>
  );
}

export default Submission;
