'use client';

import { useEffect } from 'react';

export default function MetaInjector({ metaContent }) {
    useEffect(() => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = metaContent;

        const tags = Array.from(wrapper.children);

        tags.forEach((tag) => {
            // Remove existing tag with same name or property to avoid duplicates
            if (tag.tagName === 'META') {
                const name = tag.getAttribute('name');
                const prop = tag.getAttribute('property');
                if (name) {
                    document.head.querySelectorAll(`meta[name="${name}"]`).forEach((e) => e.remove());
                }
                if (prop) {
                    document.head.querySelectorAll(`meta[property="${prop}"]`).forEach((e) => e.remove());
                }
            }
            if (tag.tagName === 'TITLE') {
                document.title = tag.textContent || '';
                return;
            }
            document.head.appendChild(tag.cloneNode(true));
        });

        return () => {
            // Optional: clean up injected tags on unmount
            tags.forEach((tag) => {
                const selector =
                    tag.tagName === 'META'
                        ? tag.getAttribute('name')
                            ? `meta[name="${tag.getAttribute('name')}"]`
                            : `meta[property="${tag.getAttribute('property')}"]`
                        : tag.tagName.toLowerCase();
                if (selector) {
                    const existing = document.head.querySelectorAll(selector);
                    existing.forEach((e) => e.remove());
                }
            });
        };
    }, [metaContent]);

    return null;
}
