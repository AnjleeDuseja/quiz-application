import React from "react";

import { Button } from "react-bootstrap";

function PrimaryBtn({ name, handleStart }) {
  return (
    <div className="d-flex justify-content-center">
      <Button className="primary-btn m-4" onClick={handleStart}>
        {name}
      </Button>
      ;
    </div>
  );
}

export default PrimaryBtn;
