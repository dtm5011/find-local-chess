import {
  RequiredValidator
} from "./chunk.Z6CEMRJQ.js";
import {
  form_control_default
} from "./chunk.HXIPTBQJ.js";
import {
  WebAwesomeFormAssociatedElement
} from "./chunk.H5XAJ2OS.js";
import {
  HasSlotController
} from "./chunk.DGCYKUU5.js";
import {
  size_default
} from "./chunk.NC5QP643.js";
import {
  watch
} from "./chunk.2NT6DI7B.js";
import {
  __decorateClass
} from "./chunk.RBKXYBVR.js";

// src/components/checkbox/checkbox.ts
import { html, isServer } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";

// src/components/checkbox/checkbox.css
var checkbox_default = ":host {\n  --checked-icon-color: var(--wa-color-brand-on-loud);\n  --checked-icon-scale: 0.8;\n\n  display: inline-flex;\n  color: var(--wa-form-control-value-color);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n[part~='control'] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  width: var(--wa-form-control-toggle-size);\n  height: var(--wa-form-control-toggle-size);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: min(\n    calc(var(--wa-form-control-toggle-size) * 0.375),\n    var(--wa-border-radius-s)\n  ); /* min prevents entirely circular checkbox */\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-form-control-border-width);\n  background-color: var(--wa-form-control-background-color);\n  transition:\n    background var(--wa-transition-normal),\n    border-color var(--wa-transition-fast),\n    box-shadow var(--wa-transition-fast),\n    color var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n\n  margin-inline-end: 0.5em;\n}\n\n[part~='base'] {\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  color: currentColor;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n/* Checked */\n[part~='control']:has(:checked, :indeterminate) {\n  color: var(--checked-icon-color);\n  border-color: var(--wa-form-control-activated-color);\n  background-color: var(--wa-form-control-activated-color);\n}\n\n/* Focus */\n[part~='control']:has(> input:focus-visible:not(:disabled)) {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Disabled */\n:host [part~='base']:has(input:disabled) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\ninput {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  pointer-events: none;\n}\n\n[part~='icon'] {\n  display: flex;\n  scale: var(--checked-icon-scale);\n\n  /* Without this, Safari renders the icon slightly to the left */\n  &::part(svg) {\n    translate: 0.0009765625em;\n  }\n\n  input:not(:checked, :indeterminate) + & {\n    visibility: hidden;\n  }\n}\n\n:host([required]) [part~='label']::after {\n  content: var(--wa-form-control-required-content);\n  color: var(--wa-form-control-required-content-color);\n  margin-inline-start: var(--wa-form-control-required-content-offset);\n}\n";

// src/components/checkbox/checkbox.ts
var WaCheckbox = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "hint");
    this.title = "";
    this.name = "";
    this._value = this.getAttribute("value") ?? null;
    this.size = "medium";
    this.disabled = false;
    this.indeterminate = false;
    this.checked = this.hasAttribute("checked");
    this.defaultChecked = this.hasAttribute("checked");
    this.form = null;
    this.required = false;
    this.hint = "";
  }
  static get validators() {
    const validators = isServer ? [] : [
      RequiredValidator({
        validationProperty: "checked",
        // Use a checkbox so we get "free" translation strings.
        validationElement: Object.assign(document.createElement("input"), {
          type: "checkbox",
          required: true
        })
      })
    ];
    return [...super.validators, ...validators];
  }
  /** The value of the checkbox, submitted as a name/value pair with form data. */
  get value() {
    return this._value ?? "on";
  }
  set value(val) {
    this._value = val;
  }
  handleClick() {
    this.hasInteracted = true;
    this.checked = !this.checked;
    this.indeterminate = false;
    this.updateComplete.then(() => {
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    });
  }
  handleDefaultCheckedChange() {
    if (!this.hasInteracted && this.checked !== this.defaultChecked) {
      this.checked = this.defaultChecked;
      this.handleValueOrCheckedChange();
    }
  }
  handleValueOrCheckedChange() {
    this.setValue(this.checked ? this.value : null, this._value);
    this.updateValidity();
  }
  handleStateChange() {
    if (this.hasUpdated) {
      this.input.checked = this.checked;
      this.input.indeterminate = this.indeterminate;
    }
    this.customStates.set("checked", this.checked);
    this.customStates.set("indeterminate", this.indeterminate);
    this.updateValidity();
  }
  handleDisabledChange() {
    this.customStates.set("disabled", this.disabled);
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("defaultChecked")) {
      if (!this.hasInteracted) {
        this.checked = this.defaultChecked;
      }
    }
    if (changedProperties.has("value") || changedProperties.has("checked")) {
      this.handleValueOrCheckedChange();
    }
  }
  formResetCallback() {
    this.checked = this.defaultChecked;
    super.formResetCallback();
    this.handleValueOrCheckedChange();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  render() {
    const hasHintSlot = isServer ? true : this.hasSlotController.test("hint");
    const hasHint = this.hint ? true : !!hasHintSlot;
    const isIndeterminate = !this.checked && this.indeterminate;
    const iconName = isIndeterminate ? "indeterminate" : "check";
    const iconState = isIndeterminate ? "indeterminate" : "check";
    return html`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ifDefined(this._value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${iconState}-icon icon" library="system" name=${iconName}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${hasHint ? "false" : "true"}
        class="${classMap({ "has-slotted": hasHint })}"
      >
        ${this.hint}
      </slot>
    `;
  }
};
WaCheckbox.css = [form_control_default, size_default, checkbox_default];
WaCheckbox.shadowRootOptions = { ...WebAwesomeFormAssociatedElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  query('input[type="checkbox"]')
], WaCheckbox.prototype, "input", 2);
__decorateClass([
  property()
], WaCheckbox.prototype, "title", 2);
__decorateClass([
  property({ reflect: true })
], WaCheckbox.prototype, "name", 2);
__decorateClass([
  property({ reflect: true })
], WaCheckbox.prototype, "value", 1);
__decorateClass([
  property({ reflect: true })
], WaCheckbox.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean })
], WaCheckbox.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], WaCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  property({ type: Boolean, attribute: false })
], WaCheckbox.prototype, "checked", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "checked" })
], WaCheckbox.prototype, "defaultChecked", 2);
__decorateClass([
  property({ reflect: true })
], WaCheckbox.prototype, "form", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], WaCheckbox.prototype, "required", 2);
__decorateClass([
  property()
], WaCheckbox.prototype, "hint", 2);
__decorateClass([
  watch("defaultChecked")
], WaCheckbox.prototype, "handleDefaultCheckedChange", 1);
__decorateClass([
  watch(["checked", "indeterminate"])
], WaCheckbox.prototype, "handleStateChange", 1);
__decorateClass([
  watch("disabled")
], WaCheckbox.prototype, "handleDisabledChange", 1);
WaCheckbox = __decorateClass([
  customElement("wa-checkbox")
], WaCheckbox);

export {
  WaCheckbox
};
