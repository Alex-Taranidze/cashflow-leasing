import { useEffect } from 'react';

export const useSEO = (
  title: string,
  description: string,
  canonicalPath: string,
  schema?: object
) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Canonical
    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = `https://cashflow.ru${canonicalPath}`;

    // Schema.org
    if (schema) {
      let scriptSchema = document.querySelector("script[id='schema-json-ld']") as HTMLScriptElement;
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'schema-json-ld';
        scriptSchema.type = 'application/ld+json';
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.text = JSON.stringify(schema);
    }
  }, [title, description, canonicalPath, schema]);
};