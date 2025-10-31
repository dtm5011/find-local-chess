/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
import {
  WaPopover
} from "./chunk.HTBRAAR5.js";

// src/react/popover/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-popover";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaPopover,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaPopover"
});
var popover_default = reactWrapper;

export {
  popover_default
};
