"use strict";

for (const link of document.querySelectorAll('a[target="_blank"]')) {
  const relationship = new Set(link.rel.split(/\s+/).filter(Boolean));
  relationship.add("noopener");
  relationship.add("noreferrer");
  link.rel = [...relationship].join(" ");
}
