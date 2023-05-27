import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-choices")
export class MyChoices extends LitElement {
  @property()
  choices: string[] = []

  render() {
    return html`
      <ul class="list">
        ${this.choices.map(
          (choice) => html` <li class="item normal">${choice}</li> `
        )}
      </ul>
    `
  }

  static styles = css`
    .list {
      list-style: none;
      padding: 0;
      margin-top: 10px;
    }
    .item {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 10px;
      &.normal {
        cursor: pointer;
        &:hover {
          background: #f8f8f8;
        }
      }
      &.disabled {
        background-color: #eee;
        color: #666;
      }
      &.selected {
        background-color: #9fc;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    "my-choices": MyChoices
  }
}
