import {
  WaTextarea
} from "./chunk.MYR5BNAM.js";

// src/react/textarea/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-textarea";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaTextarea,
  react: React,
  events: {
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaTextarea"
});
var textarea_default = reactWrapper;

export {
  textarea_default
};
