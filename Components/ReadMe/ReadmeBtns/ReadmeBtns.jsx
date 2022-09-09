import React, { useState } from "react";
import { AllContent } from "./AllContent";
import { Button } from "react-bootstrap";

export default function ReadmeBtns({ setContent }) {
  return (
    <div>
      {Object.entries(AllContent).map(([key, value], index) => {
        return (
          <div key={index}>
            <Button
              onClick={() => setContent(value)}
              style={{ color: "white" }}
            >
              {key}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
