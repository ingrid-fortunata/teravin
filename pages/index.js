import React from "react";
import MainTable from "../src/Container/MainTable";

export default function Home() {
  return (
    <div className="space-y-4 m-6">
      <div>Teravin test React JS</div>
      <a href="/submission">
        <button
          type="button"
          className="border border-gray-500 py-1 px-4 rounded-lg hover:bg-gray-400 hover:text-white"
        >
          + Add data
        </button>
      </a>
      <div>
        <MainTable />
      </div>
    </div>
  );
}
