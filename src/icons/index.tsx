export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={11} cy={11} r={8} />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Hamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill="#667085"
        fillRule="evenodd"
        d="M2.583 5a.75.75 0 0 1 .75-.75h13.334a.75.75 0 0 1 0 1.5H3.333a.75.75 0 0 1-.75-.75Zm0 10a.75.75 0 0 1 .75-.75h13.334a.75.75 0 0 1 0 1.5H3.333a.75.75 0 0 1-.75-.75Zm.75-5.75a.75.75 0 0 0 0 1.5H10a.75.75 0 0 0 0-1.5H3.333Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Dark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.24673 6.08494C5.24673 9.76773 8.23223 12.7532 11.915 12.7532C13.6686 12.7532 15.264 12.0764 16.4544 10.9697C15.5839 14.2727 12.5764 16.7083 8.99999 16.7083C4.74279 16.7083 1.29166 13.2572 1.29166 8.99997C1.29166 5.42357 3.72727 2.41604 7.03027 1.54559C5.92358 2.73595 5.24673 4.3314 5.24673 6.08494Z"
        stroke="#667085"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function Notification(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.75 2.2923C10.75 1.87808 10.4142 1.5423 10 1.5423C9.5858 1.5423 9.25001 1.87808 9.25001 2.2923V2.83595C6.08263 3.20715 3.62501 5.90022 3.62501 9.1673V14.459H3.33334C2.91913 14.459 2.58334 14.7948 2.58334 15.209C2.58334 15.6232 2.91913 15.959 3.33334 15.959H4.37501H15.625H16.6667C17.0809 15.959 17.4167 15.6232 17.4167 15.209C17.4167 14.7948 17.0809 14.459 16.6667 14.459H16.375V9.1673C16.375 5.90022 13.9174 3.20715 10.75 2.83595V2.2923ZM14.875 14.459V9.1673C14.875 6.47491 12.6924 4.2923 10 4.2923C7.30762 4.2923 5.12501 6.47491 5.12501 9.1673V14.459H14.875ZM8.00001 17.7084C8.00001 18.1226 8.3358 18.4584 8.75001 18.4584H11.25C11.6642 18.4584 12 18.1226 12 17.7084C12 17.2941 11.6642 16.9584 11.25 16.9584H8.75001C8.3358 16.9584 8.00001 17.2941 8.00001 17.7084Z"
        fill="#667085"
      />
    </svg>
  );
}

export function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.3125 1.65625L6 6.34375L10.6875 1.65625"
        stroke="#667085"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill="#667085"
        fillRule="evenodd"
        d="M5.5 3.25A2.25 2.25 0 0 0 3.25 5.5V9a2.25 2.25 0 0 0 2.25 2.25H9A2.25 2.25 0 0 0 11.25 9V5.5A2.25 2.25 0 0 0 9 3.25H5.5ZM4.75 5.5a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-.75.75H5.5A.75.75 0 0 1 4.75 9V5.5Zm.75 7.25A2.25 2.25 0 0 0 3.25 15v3.5a2.25 2.25 0 0 0 2.25 2.25H9a2.25 2.25 0 0 0 2.25-2.25V15A2.25 2.25 0 0 0 9 12.75H5.5ZM4.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H5.5a.75.75 0 0 1-.75-.75V15Zm8-9.5A2.25 2.25 0 0 1 15 3.25h3.5a2.25 2.25 0 0 1 2.25 2.25V9a2.25 2.25 0 0 1-2.25 2.25H15A2.25 2.25 0 0 1 12.75 9V5.5ZM15 4.75a.75.75 0 0 0-.75.75V9c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75H15Zm0 8A2.25 2.25 0 0 0 12.75 15v3.5A2.25 2.25 0 0 0 15 20.75h3.5a2.25 2.25 0 0 0 2.25-2.25V15a2.25 2.25 0 0 0-2.25-2.25H15ZM14.25 15a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V15Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#667085"
        fillRule="evenodd"
        d="M8 2a.75.75 0 0 1 .75.75v1h6.5v-1a.75.75 0 0 1 1.5 0v1h1.75A2.25 2.25 0 0 1 20.75 6v13a2.25 2.25 0 0 1-2.25 2.25h-13A2.25 2.25 0 0 1 3.25 19V6A2.25 2.25 0 0 1 5.5 3.75h1.75v-1A.75.75 0 0 1 8 2Zm0 3.25H5.5a.75.75 0 0 0-.75.75v2.25h14.5V6a.75.75 0 0 0-.75-.75H8Zm11.25 4.5H4.75V19c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V9.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#1D2939"
        fillRule="evenodd"
        d="M8.804 5.602a2.197 2.197 0 1 0 0 4.393 2.197 2.197 0 0 0 0-4.393ZM5.107 7.799a3.697 3.697 0 1 1 7.394 0 3.697 3.697 0 0 1-7.394 0Zm-.244 7.522c-.775.767-1.16 1.74-1.346 2.54a.365.365 0 0 0 .09.35c.095.103.26.188.469.188h9.349c.21 0 .374-.085.469-.188a.365.365 0 0 0 .09-.35c-.187-.8-.57-1.773-1.346-2.54-.756-.749-1.948-1.366-3.888-1.366-1.939 0-3.131.617-3.887 1.366Zm-1.056-1.066c1.065-1.054 2.649-1.8 4.943-1.8 2.295 0 3.88.746 4.944 1.8 1.046 1.036 1.527 2.306 1.75 3.265.322 1.377-.837 2.379-2.02 2.379H4.077c-1.182 0-2.341-1.002-2.02-2.379.224-.96.705-2.23 1.751-3.265Zm11.497-2.76a3.68 3.68 0 0 1-2.222-.742c.292-.422.523-.889.681-1.389a2.197 2.197 0 1 0 0-3.132c-.158-.5-.389-.966-.681-1.388a3.697 3.697 0 1 1 2.222 6.652Zm4.62 8.404H16.39a3.14 3.14 0 0 0 .593-1.5h2.942c.21 0 .374-.085.469-.188a.365.365 0 0 0 .09-.35c-.187-.8-.571-1.773-1.346-2.54-.733-.726-1.877-1.329-3.715-1.364a7.357 7.357 0 0 0-1.431-1.42 9.413 9.413 0 0 1 1.258-.082c2.295 0 3.88.746 4.944 1.8 1.046 1.036 1.527 2.306 1.75 3.265.322 1.377-.837 2.379-2.02 2.379Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={10}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.565.624a.748.748 0 0 1 .558-.25h.001c.192 0 .384.073.531.22l3 2.998a.75.75 0 1 1-1.06 1.06l-1.722-1.72v6.193a.75.75 0 1 1-1.5 0v-6.19L1.655 4.654a.75.75 0 0 1-1.06-1.061L3.565.624Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
