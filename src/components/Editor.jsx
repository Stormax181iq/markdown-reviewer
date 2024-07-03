import PropTypes from "prop-types";

export default function Editor({ content, onEditorChange }) {
  return (
    <div className="bg-main border w-full m-2 flex justify-center items-center h-96 flex-col">
      <h1 className="">Editor</h1>
      <textarea
        className="w-7/12 h-2/3 resize-none p-4"
        onChange={(e) => onEditorChange(e)}
        value={content}
      ></textarea>
    </div>
  );
}

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onEditorChange: PropTypes.func.isRequired,
};
