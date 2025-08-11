import {
  WaErrorEvent
} from "./chunk.SZUJSHFH.js";
import {
  watch
} from "./chunk.2NT6DI7B.js";
import {
  WebAwesomeElement
} from "./chunk.ETAGLSDL.js";
import {
  __decorateClass
} from "./chunk.RBKXYBVR.js";

// src/components/avatar/avatar.ts
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// src/components/avatar/avatar.css
var avatar_default = ":host {\n  --size: 3rem;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  color: var(--wa-color-neutral-on-normal);\n  font: inherit;\n  font-size: calc(var(--size) * 0.4);\n  vertical-align: middle;\n  background-color: var(--wa-color-neutral-fill-normal);\n  border-radius: var(--wa-border-radius-circle);\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n:host([shape='square']) {\n  border-radius: 0;\n}\n\n:host([shape='rounded']) {\n  border-radius: var(--wa-border-radius-m);\n}\n\n.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.initials {\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: inherit;\n}\n";

// src/components/avatar/avatar.ts
var WaAvatar = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  handleImageLoadError() {
    this.hasError = true;
    this.dispatchEvent(new WaErrorEvent());
  }
  render() {
    const avatarWithImage = html`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;
    let avatarWithoutImage = html``;
    if (this.initials) {
      avatarWithoutImage = html`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`;
    } else {
      avatarWithoutImage = html`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `;
    }
    return html` ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage} `;
  }
};
WaAvatar.css = avatar_default;
__decorateClass([
  state()
], WaAvatar.prototype, "hasError", 2);
__decorateClass([
  property()
], WaAvatar.prototype, "image", 2);
__decorateClass([
  property()
], WaAvatar.prototype, "label", 2);
__decorateClass([
  property()
], WaAvatar.prototype, "initials", 2);
__decorateClass([
  property()
], WaAvatar.prototype, "loading", 2);
__decorateClass([
  property({ reflect: true })
], WaAvatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], WaAvatar.prototype, "handleImageChange", 1);
WaAvatar = __decorateClass([
  customElement("wa-avatar")
], WaAvatar);

export {
  WaAvatar
};
