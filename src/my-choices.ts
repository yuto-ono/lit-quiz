import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"

type ItemStyleType = "normal" | "disabled" | "selected"

const getItemStyle = (
  choice: string,
  yourAnswer: string,
  judged: boolean
): ItemStyleType => {
  if (judged) {
    if (choice === yourAnswer) {
      return "selected"
    }
    return "disabled"
  }
  return "normal"
}

@customElement("my-choices")
export class MyChoices extends LitElement {
  @property()
  choices: string[] = []

  @property()
  yourAnswer = ""

  @property()
  judged = false

  render() {
    return html`
      <ul class="list">
        ${this.choices.map(
          (choice) =>
            html`
              <li
                class="item ${getItemStyle(
                  choice,
                  this.yourAnswer,
                  this.judged
                )}"
                @click=${() => this._select(choice)}
              >
                ${choice}
              </li>
            `
        )}
      </ul>
    `
  }

  private _select(choice: string) {
    if (!this.judged) {
      this.dispatchEvent(
        new CustomEvent("select", {
          detail: { choice },
          bubbles: true,
          composed: true,
        })
      )
    }
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
