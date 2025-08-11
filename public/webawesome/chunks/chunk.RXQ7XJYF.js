import {
  WaDrawer
} from "./chunk.BAAE4PUU.js";

// src/react/drawer/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-drawer";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaDrawer,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaDrawer"
});
var drawer_default = reactWrapper;

export {
  drawer_default
};
