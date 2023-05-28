import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("my-button")
export class MyButton extends LitElement {
  render() {
    return html` <button class="btn"><slot></slot></button> `
  }

  static styles = css`
    .btn {
      width: 100%;
      background: #3498db;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      box-shadow: 0 4px 0 #2880b9;
      border: none;
      &:hover {
        opacity: 0.8;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    "my-button": MyButton
  }
}
