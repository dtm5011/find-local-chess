import {
  watch
} from "./chunk.2NT6DI7B.js";
import {
  WebAwesomeElement
} from "./chunk.ETAGLSDL.js";
import {
  __decorateClass
} from "./chunk.RBKXYBVR.js";

// src/components/tab/tab.ts
import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

// src/components/tab/tab.css
var tab_default = ":host {\n  display: inline-block;\n  color: var(--wa-color-neutral-on-quiet);\n  font-weight: var(--wa-font-weight-action);\n}\n\n.tab {\n  display: inline-flex;\n  align-items: center;\n  font: inherit;\n  padding: 1em 1.5em;\n  white-space: nowrap;\n  user-select: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n  transition: color var(--wa-transition-fast) var(--wa-transition-easing);\n\n  ::slotted(wa-icon:first-child) {\n    margin-inline-end: 0.5em;\n  }\n\n  ::slotted(wa-icon:last-child) {\n    margin-inline-start: 0.5em;\n  }\n}\n\n@media (hover: hover) {\n  :host(:hover:not([disabled])) .tab {\n    color: currentColor;\n  }\n}\n\n:host(:focus) {\n  outline: transparent;\n}\n\n:host(:focus-visible) .tab {\n  outline: var(--wa-focus-ring);\n  outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));\n}\n\n:host([active]:not([disabled])) {\n  color: var(--wa-color-brand-on-quiet);\n}\n\n:host([disabled]) .tab {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@media (forced-colors: active) {\n  :host([active]:not([disabled])) {\n    outline: solid 1px transparent;\n    outline-offset: -3px;\n  }\n}\n";

// src/components/tab/tab.ts
var id = 0;
var WaTab = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id;
    this.componentId = `wa-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.disabled = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    this.slot || (this.slot = "nav");
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }
  render() {
    this.id = this.id?.length > 0 ? this.id : this.componentId;
    return html`
      <div
        part="base"
        class=${classMap({
      tab: true,
      "tab-active": this.active
    })}
      >
        <slot></slot>
      </div>
    `;
  }
};
WaTab.css = tab_default;
__decorateClass([
  query(".tab")
], WaTab.prototype, "tab", 2);
__decorateClass([
  property({ reflect: true })
], WaTab.prototype, "panel", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], WaTab.prototype, "active", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], WaTab.prototype, "disabled", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], WaTab.prototype, "tabIndex", 2);
__decorateClass([
  watch("active")
], WaTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], WaTab.prototype, "handleDisabledChange", 1);
WaTab = __decorateClass([
  customElement("wa-tab")
], WaTab);

export {
  WaTab
};
