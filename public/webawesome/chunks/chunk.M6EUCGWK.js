import {
  LocalizeController
} from "./chunk.K5GQ3GNY.js";
import {
  WebAwesomeElement
} from "./chunk.ETAGLSDL.js";
import {
  __decorateClass
} from "./chunk.RBKXYBVR.js";

// src/components/format-bytes/format-bytes.ts
import { customElement, property } from "lit/decorators.js";
var WaFormatBytes = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.unit = "byte";
    this.display = "short";
  }
  static get styles() {
    return [];
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const bitPrefixes = ["", "kilo", "mega", "giga", "tera"];
    const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"];
    const prefix = this.unit === "bit" ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
    return this.localize.number(valueToFormat, {
      style: "unit",
      unit,
      unitDisplay: this.display
    });
  }
};
__decorateClass([
  property({ type: Number })
], WaFormatBytes.prototype, "value", 2);
__decorateClass([
  property()
], WaFormatBytes.prototype, "unit", 2);
__decorateClass([
  property()
], WaFormatBytes.prototype, "display", 2);
WaFormatBytes = __decorateClass([
  customElement("wa-format-bytes")
], WaFormatBytes);

export {
  WaFormatBytes
};
