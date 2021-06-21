import React from "react";

// components
import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
