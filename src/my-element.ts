import { LitElement, css, html, nothing } from "lit"
import { customElement, state } from "lit/decorators.js"
import "./my-choices"
import "./my-result"
import "./my-button"

const questionText =
  "以下のうち、 Web Components を活用するためのライブラリはどれでしょう？"
const choices = ["React", "SolidJS", "Svelte", "Lit"] as const
const answer = "Lit" satisfies (typeof choices)[number]
const explanationText =
  "Litは、Googleが開発した Web Components ライブラリです。このアプリケーションもLitで作られています。"

@customElement("my-element")
export class MyElement extends LitElement {
  @state()
  private _yourAnswer = ""

  @state()
  private _judged = false

  @state()
  private _isCorrect = false

  render() {
    return html`
      <main class="container">
        <h1 class="title">Lit Quiz</h1>
        <h2 class="heading">問題</h2>
        <p class="question">${questionText}</p>
        <my-choices
          .choices=${choices}
          .yourAnswer=${this._yourAnswer}
          .judged=${this._judged}
          @select=${this._onSelect}
        ></my-choices>
        ${this._judged
          ? html`
              <my-result .isCorrect=${this._isCorrect}></my-result>
              ${this._isCorrect
                ? html`<p class="explanation">${explanationText}</p>`
                : nothing}
              <my-button @click=${this._reset}>リトライ</my-button>
            `
          : nothing}
      </main>
    `
  }

  private _onSelect(e: CustomEvent<{ choice: string }>) {
    const { choice } = e.detail
    this._yourAnswer = choice
    this._judged = true
    this._isCorrect = choice === answer
  }

  private _reset() {
    this._yourAnswer = ""
    this._judged = false
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
