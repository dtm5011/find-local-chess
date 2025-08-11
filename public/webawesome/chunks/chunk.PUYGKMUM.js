import {
  WaSlider
} from "./chunk.YOVCACP6.js";

// src/react/slider/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-slider";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaSlider,
  react: React,
  events: {
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaSlider"
});
var slider_default = reactWrapper;

export {
  slider_default
};
