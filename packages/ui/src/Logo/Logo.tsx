/* Types */
import type { SVGProps } from "react";

/* Symbols */
import clsx from "clsx";

/* Logo */
export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 50"
      fill="none"
      className={clsx(props?.className ?? "text-secondary")}
      {...props}
    >
      <path
        fill="currentColor"
        d="m0 3.906 3.962 32.47c.756 6.198 4.655 9.717 10.974 9.717h2.713L12.502 3.906H0ZM44.983 3.906 44.507 0H39.94l.743 6.091c6.25.157 8.94 2.806 9.918 7.605 1.024 5.028.433 8.666-1.71 10.393.964.514 1.858 1.279 2.587 2.407 1.78 2.754 3.166 9.159 1.29 13.392-1.2 2.707-3.749 3.959-7.453 4.025L46.059 50h4.566l-.486-3.982c5.412-.536 8.743-3.963 9.436-9.64l3.962-32.47H44.985l-.002-.002ZM33.956 43.916 29.18 6.084h9.588L38.025 0h-9.588l.476 3.906H14.417l5.148 42.187h14.656l.477 3.906h9.444l-.742-6.083h-9.444ZM41.417 27.663l1.047 8.58h1.772l-1.047-8.58h-1.772ZM41.424 13.199h-1.771l.889 7.28h1.771l-.889-7.28Z"
      />
    </svg>
  );
}
