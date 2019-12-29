import marked, { Renderer } from 'marked';
import highlightjs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';

highlightjs.registerLanguage('javascript', javascript);
highlightjs.registerLanguage('html', html);
highlightjs.registerLanguage('css', css);
highlightjs.registerLanguage('bash', bash);
highlightjs.registerLanguage('json', json);

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
