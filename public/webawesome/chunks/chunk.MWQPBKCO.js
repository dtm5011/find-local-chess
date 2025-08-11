import {
  WaMutationObserver
} from "./chunk.Z7B3BDCD.js";

// src/react/mutation-observer/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-mutation-observer";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaMutationObserver,
  react: React,
  events: {
    onWaMutation: "wa-mutation"
  },
  displayName: "WaMutationObserver"
});
var mutation_observer_default = reactWrapper;

export {
  mutation_observer_default
};
