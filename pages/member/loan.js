import React from "react";

// components
import CardTable from "components/Cards/CardTable.js";
import LoanModal from "components/Modals/LoanModal.js";

// layout for page

import Member from "layouts/Member.js";

export default function Loan() {
  return (
    <>
      <div className="flex flex-wrap">
        <LoanModal></LoanModal>
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}

Loan.layout = Member;
