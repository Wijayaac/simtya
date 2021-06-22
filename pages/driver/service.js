import React from "react";

// components

import CardTable from "components/Cards/CardTable";
import ServiceModal from "components/Modals/ServiceModal";

// layout for page

import Driver from "layouts/Driver.js";

export default function Service() {
  return (
    <>
      <div className="flex flex-wrap">
        <ServiceModal></ServiceModal>
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}

Service.layout = Driver;
