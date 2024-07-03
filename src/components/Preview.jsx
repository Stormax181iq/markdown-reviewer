import PropTypes from "prop-types";

import { marked } from "marked";

export default function Preview({ content }) {
  const rawHtml = marked.parse(content);
  console.log(rawHtml);
  const markup = { __html: rawHtml };
  return (
    <>
      <h1>Preview</h1>
      <div
        className="border bg-slate-50 w-3/4 p-4"
        dangerouslySetInnerHTML={markup}
      ></div>
    </>
  );
}

Preview.propTypes = {
  content: PropTypes.string.isRequired,
};
