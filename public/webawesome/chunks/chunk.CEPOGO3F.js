import {
  WaDetails
} from "./chunk.ICL4RETJ.js";

// src/react/details/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-details";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaDetails,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaDetails"
});
var details_default = reactWrapper;

export {
  details_default
};
