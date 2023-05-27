import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import "./my-choices"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more"

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <main class="container">
        <h1 class="title">Lit Quiz</h1>
        <h2 class="heading">問題</h2>
        <p class="question">{questionText}</p>
        <my-choices></my-choices>
      </main>
    `
  }

  static styles = css`
    .title {
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: bold;
    }
    .container {
      width: min(600px, 85%);
      margin: 16px auto;
      background-color: #fff;
      border-radius: 4px;
      padding: 16px;
      position: relative;
    }
    .heading {
      margin-bottom: 18px;
      font-size: 18px;
      font-weight: bold;
    }
    .explanation {
      margin-bottom: 16px;
      font-size: 16px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement
  }
}
