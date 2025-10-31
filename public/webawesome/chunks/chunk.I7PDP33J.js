/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
import {
  WaInput
} from "./chunk.DS37SA5W.js";

// src/react/input/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-input";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaInput,
  react: React,
  events: {
    onWaClear: "wa-clear",
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaInput"
});
var input_default = reactWrapper;

export {
  input_default
};
