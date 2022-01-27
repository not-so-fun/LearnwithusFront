import React, { FC } from "react";
import { Editor } from "@tinymce/tinymce-react";
// TINY-MICE TOKEN=7nzeo0sns30q6e2rn3uxbkx4baqhmo5ok21zhy1c47kede0a
import { formDataInterface } from "../AskQuestionsComponent/AskQuestionForm";

interface TextEditorInterface {
  formData: formDataInterface;
  setFormData: React.Dispatch<React.SetStateAction<formDataInterface>>;
}

const TextEditor: FC<TextEditorInterface> = ({ formData, setFormData }) => {
  return (
    <>
      <Editor
        apiKey="7nzeo0sns30q6e2rn3uxbkx4baqhmo5ok21zhy1c47kede0a"
        value={formData.question}
        onChange={(e) => {
          setFormData({ ...formData, question: e.target.value });

          console.log(e.target);
        }}
        init={{
          height: "500",
          plugins: "link image code",
          toolbar:
            "undo redo | bold italic | alignleft aligncenter alignright | code",
        }}
      />
    </>
  );
};

export default TextEditor;
