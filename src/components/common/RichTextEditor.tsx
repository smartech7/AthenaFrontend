import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

import ReactSunEditor from 'suneditor-react';
import { type SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps';

const MyComponent = (props: SunEditorReactProps) => {
  return (
    <div>
      <ReactSunEditor
        height="300px"
        setOptions={{
          resizingBar: false,
          buttonList: [
            [
              'formatBlock',
              'font',
              'fontSize',
              'bold',
              'underline',
              'italic',
              'strike',
              'superscript',
              'subscript',
              'removeFormat',
            ],
            [
              'blockquote',
              'showBlocks',
              'fontColor',
              'hiliteColor',
              'outdent',
              'indent',
              'align',
              'list',
              'horizontalRule',
              'table',
              'link',
              'image',
              'video',
            ],
            '/',
            ['undo', 'redo'],
            ['preview'],
          ],
        }}
        setDefaultStyle={props.setDefaultStyle}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  );
};

export default MyComponent;
