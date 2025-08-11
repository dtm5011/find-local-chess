import {
  WaTag
} from "./chunk.AXAES674.js";

// src/react/tag/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-tag";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaTag,
  react: React,
  events: {
    onWaRemove: "wa-remove"
  },
  displayName: "WaTag"
});
var tag_default = reactWrapper;

export {
  tag_default
};
