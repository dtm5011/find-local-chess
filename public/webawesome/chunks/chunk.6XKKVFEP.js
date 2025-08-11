import {
  LocalizeController
} from "./chunk.K5GQ3GNY.js";
import {
  WebAwesomeElement
} from "./chunk.ETAGLSDL.js";
import {
  __decorateClass
} from "./chunk.RBKXYBVR.js";

// src/components/progress-ring/progress-ring.ts
import { html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";

// src/components/progress-ring/progress-ring.css
var progress_ring_default = ":host {\n  --size: 8rem;\n  --track-width: 0.25em; /* avoid using rems here */\n  --track-color: var(--wa-color-neutral-fill-normal);\n  --indicator-width: var(--track-width);\n  --indicator-color: var(--wa-color-brand-fill-loud);\n  --indicator-transition-duration: 0.35s;\n\n  display: inline-flex;\n}\n\n.progress-ring {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.image {\n  width: var(--size);\n  height: var(--size);\n  rotate: -90deg;\n  transform-origin: 50% 50%;\n}\n\n.track,\n.indicator {\n  --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);\n  --circumference: calc(var(--radius) * 2 * 3.141592654);\n\n  fill: none;\n  r: var(--radius);\n  cx: calc(var(--size) / 2);\n  cy: calc(var(--size) / 2);\n}\n\n.track {\n  stroke: var(--track-color);\n  stroke-width: var(--track-width);\n}\n\n.indicator {\n  stroke: var(--indicator-color);\n  stroke-width: var(--indicator-width);\n  stroke-linecap: round;\n  transition-property: stroke-dashoffset;\n  transition-duration: var(--indicator-transition-duration);\n  stroke-dasharray: var(--circumference) var(--circumference);\n  stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));\n}\n\n.label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  user-select: none;\n  -webkit-user-select: none;\n}\n";

// src/components/progress-ring/progress-ring.ts
var WaProgressRing = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return html`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="image">
          <circle class="track"></circle>
          <circle class="indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `;
  }
};
WaProgressRing.css = progress_ring_default;
__decorateClass([
  query(".indicator")
], WaProgressRing.prototype, "indicator", 2);
__decorateClass([
  state()
], WaProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], WaProgressRing.prototype, "value", 2);
__decorateClass([
  property()
], WaProgressRing.prototype, "label", 2);
WaProgressRing = __decorateClass([
  customElement("wa-progress-ring")
], WaProgressRing);

export {
  WaProgressRing
};
