import { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';

let Quill; // declare Quill outside component

export default function Editor({ value, onChange }) {
    const editorRef = useRef(null);
    const quillInstanceRef = useRef(null);

    useEffect(() => {
        async function initQuill() {
            if (typeof window === 'undefined') return; // Avoid SSR

            const QuillImport = (await import('quill')).default;
            Quill = QuillImport;

            if (editorRef.current && !quillInstanceRef.current) {
                quillInstanceRef.current = new Quill(editorRef.current, {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ align: [] }],
                            ['image', 'code-block'],
                        ],
                    },
                });

                quillInstanceRef.current.on('text-change', () => {
                    const html = editorRef.current.querySelector('.ql-editor')?.innerHTML;
                    onChange(html);
                });

                // Set initial value
                if (value) {
                    quillInstanceRef.current.clipboard.dangerouslyPasteHTML(value);
                }
            }
        }

        initQuill();
    }, []);

    return <div ref={editorRef} style={{ minHeight: '150px' }} />;
}
