import {
  WaPopup
} from "./chunk.WHRN4FSW.js";

// src/react/popup/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-popup";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaPopup,
  react: React,
  events: {
    onWaReposition: "wa-reposition"
  },
  displayName: "WaPopup"
});
var popup_default = reactWrapper;

export {
  popup_default
};
