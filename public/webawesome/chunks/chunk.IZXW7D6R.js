import {
  WaTree
} from "./chunk.BWYAQSE2.js";

// src/react/tree/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-tree";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaTree,
  react: React,
  events: {
    onWaSelectionChange: "wa-selection-change"
  },
  displayName: "WaTree"
});
var tree_default = reactWrapper;

export {
  tree_default
};
