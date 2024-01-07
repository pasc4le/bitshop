/* Types */
import type { SVGProps } from "react";

/* Symbols */
import clsx from "clsx";

/* LogoMark */
export default function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61 50"
      className={clsx(props?.className ?? "text-secondary")}
      {...props}
    >
      <path
        fill="currentColor"
        d="M42.1 3.906 41.625 0h-4.566l.744 6.091c6.249.157 8.94 2.806 9.917 7.605 1.024 5.028.434 8.666-1.71 10.393.964.514 1.859 1.279 2.587 2.406 1.78 2.754 3.166 9.16 1.291 13.392-1.2 2.708-3.749 3.96-7.453 4.026l.743 6.086h4.565l-.485-3.982c5.411-.536 8.743-3.962 9.435-9.64l3.963-32.47H42.102l-.001-.001ZM39.366 43.916h-9.012L25.577 6.084h9.155L33.991.002h-9.156l.476 3.906H0l3.962 32.47c.756 6.197 4.655 9.716 10.974 9.716H30.62L31.097 50h9.012l-.742-6.082-.001-.002ZM37.383 27.662l1.047 8.581h2.923l-1.047-8.581h-2.923ZM38.542 13.199h-2.924l.887 7.28h2.926l-.89-7.28Z"
      />
    </svg>
  );
}
