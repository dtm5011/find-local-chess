import {
  WaTooltip
} from "./chunk.XSK7N4GQ.js";

// src/react/tooltip/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-tooltip";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaTooltip,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaTooltip"
});
var tooltip_default = reactWrapper;

export {
  tooltip_default
};
