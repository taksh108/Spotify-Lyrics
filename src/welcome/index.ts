import { render, html } from '@mantou/gem';

import { fontStyle } from '../common/font';
import { theme } from '../common/theme';

render(
  html`
    ${fontStyle}
    <style>
      * {
        box-sizing: border-box;
      }
      html {
        padding-bottom: 5em;
        font-size: 62.5%;
      }
      body {
        font-size: 1.6rem;
      }
      h1, h2 {
        text-align: center;
      }
      h2 {
        font-weight: 200;
      }
      img {
        display: block;
        max-width: 80%;
        margin: auto auto .5em;
      }
      section {
        width: 60em;
        padding: 1em;
        margin: auto;
        max-width: 100%;
      }
      details {
        padding: 1em;
        border: 1px solid rgba(${theme.blackRGB}, 0.1);
      }
      details + details {
        border-top: none;
        margin-top: -1px;
      }
      details[open] summary::after {
        transform: rotate(270deg);
      }
      details > summary::-webkit-details-marker {
        display: none;
      }
      summary {
        cursor: pointer;
        margin: -1em;
        padding: 1em;
        display: flex;
        align-items: center;
      }
      summary::after {
        content: '›';
        font-size: 2em;
        line-height: .5;
        margin-right: .5em;
        transform: rotate(90deg);
      }
      summary h3 {
        flex-grow: 1;
        margin: 0;
        line-height: 1.3;
      }
      summary:focus {
        outline: none;
      }
    </style>
    <section>
      <h1>Welcome</h1>
      <h2>Click lyrics button or press the ${'`L`'} key to open the lyrics</h2>
    </section>
    <section>
      <img src="https://raw.githubusercontent.com/mantou132/Spotify-Lyrics/master/screenshot/lyrics-button.jpg"></img>
    </section>
    <section>
      <h2>FAQ</h2>
      <details>
        <summary><h3>No lyrics button</h3></summary>
        <ul>
          <li>Try to refresh the WebApp</li>
          <li>Make sure you are logged in</li>
        </ul>
      </details>
      <details>
        <summary><h3>Can't find lyrics</h3></summary>
        <ul>
          <li>Open the popup from the extension menu, try other lyrics, If you have found the correct lyrics, save your choice</li>
          <li>Middle-click the lyrics button, open LRC editor, then edit and upload</li>
        </ul>
        <img src="https://raw.githubusercontent.com/mantou132/Spotify-Lyrics/master/screenshot/chrome-popup.jpg"></img>
        <img src="https://raw.githubusercontent.com/mantou132/Spotify-Lyrics/master/screenshot/lrc-editor-in-spotify.jpg"></img>
      </details>
      <details>
        <summary><h3>Modify lyrics style</h3></summary>
        <p>Right click on the lyrics button to open options</p>
        <img src="https://raw.githubusercontent.com/mantou132/Spotify-Lyrics/master/screenshot/options-in-spotify.jpg"></img>
      </details>
      <details>
        <summary><h3>Desktop client support?</h3></summary>
        <p>You can <a href="https://support.google.com/chrome/answer/9658361" target="_blank">install</a> WebApp(PWA) instead of desktop client</p>
      </details>
      <details>
        <summary><h3>Support other music web player?</h3></summary>
        <p>
          In addition to Spotify, YouTube Music is now supported.
          If you want to display lyrics in other web music players, please comment <a href="https://github.com/mantou132/Spotify-Lyrics/issues/35">here</a>.</p>
      </details>
    </section>
  `,
  document.body,
);