import React from "react";
import ReactQuill, {Quill, Mixin, Toolbar} from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QuillEditor.css";
import "./QuillNavBar.css";

const Lesson = () => {
    return (
    <h1 className="pt-32"><ReactQuill theme="snow" /></h1>
    )
};

export default Lesson;
