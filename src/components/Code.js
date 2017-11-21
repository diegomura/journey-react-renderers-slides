import React from 'react';
import classNames from 'classnames';

const preCode = text => {
  var txt = text
    .replace(/^[\r\n]+/, "")	// strip leading newline
    .replace(/\s+$/g, "");		// strip trailing whitespace

  var mat, str, re = /^[\t ]+/gm, len, min = 1e3;

  while (mat = re.exec(txt)) {
    len = mat[0].length;

    if (len < min) {
      min = len;
      str = mat[0];
    }
  }

  if (min == 1e3)
    return;

  return txt.replace(new RegExp("^" + str, 'gm'), "");
}

const Code = ({ language, style, className, children }) => (
  <pre
    style={style}
    className={className}
  >
    <code className={`language-${language}`}>
      {preCode(children)}
    </code>
  </pre>
);

export default Code;
