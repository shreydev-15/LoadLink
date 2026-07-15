export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const slugify = (text) => text.toLowerCase().replace(/ /g, "-");
