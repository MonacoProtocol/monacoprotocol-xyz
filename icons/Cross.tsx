type CrossIconProps = {
  size?: "small" | "default";
};

export const Cross = ({ size = "default" }: CrossIconProps) => (
  <svg
    width={size === "small" ? 24 : 30}
    height={size === "small" ? 24 : 30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
