import Editor from "@toast-ui/editor";
import '@toast-ui/editor/dist/toastui-editor.css';

function getEditor(el) {
  const editor = new Editor({
    el,
    height: "500px",
    initialEditType: "markdown",
    previewStyle: "vertical",
  });

  return editor;
}

window.getToastUIEditor = getEditor;
// editor.getMarkdown();

