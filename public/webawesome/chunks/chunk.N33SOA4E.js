import {
  WaAnimation
} from "./chunk.JD4SX5SV.js";

// src/react/animation/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-animation";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaAnimation,
  react: React,
  events: {
    onWaCancel: "wa-cancel",
    onWaFinish: "wa-finish",
    onWaStart: "wa-start"
  },
  displayName: "WaAnimation"
});
var animation_default = reactWrapper;

export {
  animation_default
};
