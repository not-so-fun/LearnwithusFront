import React, { FC } from "react";
import { Editor } from "@tinymce/tinymce-react";
// TINY-MICE TOKEN=7nzeo0sns30q6e2rn3uxbkx4baqhmo5ok21zhy1c47kede0a
import storage from "../../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { formDataInterface } from "../AskQuestionForm";

interface TextEditorInterface {
  formData: formDataInterface;
  setFormData: React.Dispatch<React.SetStateAction<formDataInterface>>;
}

const TextEditor: FC<TextEditorInterface> = ({ formData, setFormData }) => {
  const handleChangeEditor = (content: any, editor: any) => {
    setFormData({ ...formData, question: content });
  };

  return (
    <>
      <Editor
        apiKey="7nzeo0sns30q6e2rn3uxbkx4baqhmo5ok21zhy1c47kede0a"
        value={formData.question}
        onEditorChange={handleChangeEditor}
        init={{
          height: "600",
          plugins: "link image code",
          toolbar:
            "undo redo  | bold italic | alignleft aligncenter alignright | code",

          file_picker_types: "image",
          image_title: true,
          /* enable automatic uploads of images represented by blob or data URIs*/
          automatic_uploads: false,
          file_picker_callback: function (callback, value, meta) {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");

            input.onchange = function () {
              if (input != null && input.files !== null) {
                var file = input.files[0];
                console.log(value, meta);

                setFormData({ ...formData, showImageModal: true });

                const sotrageRef = ref(storage, `files/${file.name}`);
                const uploadTask = uploadBytesResumable(sotrageRef, file);

                uploadTask.on(
                  "state_changed",
                  (snapshot) => {
                    const prog = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    // setFormData({ ...formData, imageUploadPercent: prog });
                  },
                  (error) => console.log(error),
                  () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                      (downloadURL) => {
                        callback(downloadURL);
                        setFormData({ ...formData, showImageModal: false });
                      }
                    );
                  }
                );
              }
            };

            input.click();
          },
        }}
      />
    </>
  );
};

export default TextEditor;
