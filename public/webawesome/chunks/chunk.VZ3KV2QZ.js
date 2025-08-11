import {
  WaCopyButton
} from "./chunk.W2HXWW3U.js";

// src/react/copy-button/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-copy-button";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaCopyButton,
  react: React,
  events: {
    onWaCopy: "wa-copy",
    onWaError: "wa-error"
  },
  displayName: "WaCopyButton"
});
var copy_button_default = reactWrapper;

export {
  copy_button_default
};
