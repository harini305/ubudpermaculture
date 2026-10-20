import Link from "next/link";

// Renders extracted article text, turning each recorded link back into an anchor
// at its first unused occurrence. Links whose target is known to be broken arrive
// with href null and stay plain text.
export default function RichText({ text, links = [] }) {
  const parts = [];
  let rest = text;
  let key = 0;
  for (const link of links) {
    const at = rest.indexOf(link.text);
    if (at === -1 || !link.href) continue;
    if (at > 0) parts.push(rest.slice(0, at));
    const internal = link.href.startsWith("/");
    parts.push(
      internal ? (
        <Link key={key++} href={link.href}>
          {link.text}
        </Link>
      ) : (
        <a key={key++} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      )
    );
    rest = rest.slice(at + link.text.length);
  }
  parts.push(rest);
  return <>{parts}</>;
}
