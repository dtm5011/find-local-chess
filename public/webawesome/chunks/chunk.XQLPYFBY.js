import {
  WaTreeItem
} from "./chunk.VXXKBMUG.js";

// src/react/tree-item/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-tree-item";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaTreeItem,
  react: React,
  events: {
    onWaExpand: "wa-expand",
    onWaAfterExpand: "wa-after-expand",
    onWaCollapse: "wa-collapse",
    onWaAfterCollapse: "wa-after-collapse",
    onWaLazyChange: "wa-lazy-change",
    onWaLazyLoad: "wa-lazy-load"
  },
  displayName: "WaTreeItem"
});
var tree_item_default = reactWrapper;

export {
  tree_item_default
};
