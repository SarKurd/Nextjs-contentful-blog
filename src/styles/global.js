import css from 'styled-jsx/css';

export default css.global`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #1b2023;
    color: rgba(255, 255, 255, 0.88);
    line-height: 1.5;
    font-size: 1.1rem;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  #__next {
    height: 100%;
    width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #ffffff;
  }

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    border-bottom: 1px solid #f7ff1a;
  }

  /* links inside the post */
  .post a {
    color: #f7ff1a;
    border-bottom: 1px solid #f7ff1a;
  }
  .post a:hover {
    color: #f7ff1a;
    border-bottom: none;
  }

  p > img {
    width: 100%;
    display: flex;
    margin: 0 auto;
  }

  blockquote {
    margin-left: 0;
    margin-right: 1.75rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.42188rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-size: 1.20112rem;
    line-height: 1.75rem;
    color: inherit;
    font-style: italic;
    border-left: 0.32813rem solid hsla(0, 0%, 0%, 0.9);
    border-left-color: #f7ff1a;
    opacity: 0.7;
  }

  blockquote > p:before,
  blockquote > p:after {
    font-family: inherit;
    color: #f7ff1a;
  }

  blockquote > p:before {
    content: '\201C';
    padding-right: 0.5rem;
  }

  blockquote > p:after {
    padding-left: 0.5rem;
    content: '\201D';
  }

  :not(pre) > code {
    border-radius: 0.3em;
    background: rgba(115, 124, 153, 0.2);
    color: #e6e6e6;
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }

  a > code {
    color: #f7ff1a;
  }
  /*
      vim-hybrid theme by w0ng (https://github.com/w0ng/vim-hybrid)
      and minor modification by @SarKurd
  */

  /*background color*/
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #11161b;
  }

  /*selection color*/
  .hljs::selection,
  .hljs span::selection {
    background: #366056;
  }

  .hljs::-moz-selection,
  .hljs span::-moz-selection {
    background: #366056;
  }

  /*foreground color*/
  .hljs {
    color: #c5c8c6;
  }

  /*color: fg_yellow*/
  .hljs-title,
  .hljs-name {
    color: #f0c674;
  }

  /*color: fg_comment*/
  .hljs-comment,
  .hljs-meta,
  .hljs-meta .hljs-keyword {
    color: #13940b;
  }

  /*color: fg_red*/
  .hljs-number,
  .hljs-symbol,
  .hljs-literal,
  .hljs-deletion,
  .hljs-link {
    color: #cc6666;
  }

  /*color: fg_green*/
  .hljs-string,
  .hljs-doctag,
  .hljs-addition,
  .hljs-regexp,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #b5bd68;
  }

  /*color: fg_purple*/
  .hljs-attribute,
  .hljs-code,
  .hljs-selector-id {
    color: #b294bb;
  }

  /*color: fg_blue*/
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-bullet,
  .hljs-tag {
    color: #81a2be;
  }

  /*color: fg_aqua*/
  .hljs-subst,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #8abeb7;
  }

  /*color: fg_orange*/
  .hljs-type,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-quote,
  .hljs-section,
  .hljs-selector-class {
    color: #de935f;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  /* NProgress */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #f7ff1a;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #f7ff1a, 0 0 5px #f7ff1a;
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
`;
