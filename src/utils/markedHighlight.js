import marked, { Renderer } from 'marked';
import highlightjs from 'highlight.js';

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

function escapeForHTML(input) {
  return input.replace(/([&<>'"])/g, char => escapeMap[char]);
}

// Create your custom renderer.
const renderer = new Renderer();
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && highlightjs.getLanguage(language));

  // Highlight only if the language is valid.
  // highlight.js escapes HTML in the code, but we need to escape by ourselves
  // when we don't use it.
  const highlighted = validLang
    ? highlightjs.highlight(language, code).value
    : escapeForHTML(code);

  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

renderer.link = (href, title, text) =>
  `<a target="_blank" rel="noopnner noreferrer" href="${href}" title="${title}">${text}</a>`;

// Set the renderer to marked.
marked.setOptions({ renderer });

function markedHighlight(body) {
  return marked(body);
}

export default markedHighlight;
