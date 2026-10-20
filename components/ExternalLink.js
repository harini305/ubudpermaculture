import { ExternalIcon } from "./Icons";

// Outbound link: opens in a new tab and says so to screen readers.
export default function ExternalLink({ href, children, className, icon = true, label = "opens in a new tab", ...rest }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      {icon && <ExternalIcon />}
      <span className="visually-hidden"> ({label})</span>
    </a>
  );
}
