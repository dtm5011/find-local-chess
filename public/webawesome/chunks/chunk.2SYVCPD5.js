import {
  WaColorPicker
} from "./chunk.TS2S3HQ2.js";

// src/react/color-picker/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-color-picker";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaColorPicker,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide",
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaColorPicker"
});
var color_picker_default = reactWrapper;

export {
  color_picker_default
};
