import {
  WaCheckbox
} from "./chunk.QMGQFROG.js";

// src/react/checkbox/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-checkbox";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaCheckbox,
  react: React,
  events: {
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaCheckbox"
});
var checkbox_default = reactWrapper;

export {
  checkbox_default
};
