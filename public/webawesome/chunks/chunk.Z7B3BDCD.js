import {
  watch
} from "./chunk.2NT6DI7B.js";
import {
  WebAwesomeElement
} from "./chunk.ETAGLSDL.js";
import {
  __decorateClass
} from "./chunk.RBKXYBVR.js";

// src/components/mutation-observer/mutation-observer.ts
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

// src/events/mutation.ts
var WaMutationEvent = class extends Event {
  constructor(detail) {
    super("wa-mutation", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

// src/components/mutation-observer/mutation-observer.css
var mutation_observer_default = ":host {\n  display: contents;\n}\n";

// src/components/mutation-observer/mutation-observer.ts
var WaMutationObserver = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.attrOldValue = false;
    this.charData = false;
    this.charDataOldValue = false;
    this.childList = false;
    this.disabled = false;
    this.handleMutation = (mutationList) => {
      this.dispatchEvent(new WaMutationEvent({ mutationList }));
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (typeof MutationObserver !== "undefined") {
      this.mutationObserver = new MutationObserver(this.handleMutation);
      if (!this.disabled) {
        this.startObserver();
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  startObserver() {
    const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }
  render() {
    return html` <slot></slot> `;
  }
};
WaMutationObserver.css = mutation_observer_default;
__decorateClass([
  property({ reflect: true })
], WaMutationObserver.prototype, "attr", 2);
__decorateClass([
  property({ attribute: "attr-old-value", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "attrOldValue", 2);
__decorateClass([
  property({ attribute: "char-data", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "charData", 2);
__decorateClass([
  property({ attribute: "char-data-old-value", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "charDataOldValue", 2);
__decorateClass([
  property({ attribute: "child-list", type: Boolean, reflect: true })
], WaMutationObserver.prototype, "childList", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], WaMutationObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], WaMutationObserver.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("attr", { waitUntilFirstUpdate: true }),
  watch("attr-old-value", { waitUntilFirstUpdate: true }),
  watch("char-data", { waitUntilFirstUpdate: true }),
  watch("char-data-old-value", { waitUntilFirstUpdate: true }),
  watch("childList", { waitUntilFirstUpdate: true })
], WaMutationObserver.prototype, "handleChange", 1);
WaMutationObserver = __decorateClass([
  customElement("wa-mutation-observer")
], WaMutationObserver);

export {
  WaMutationObserver
};
