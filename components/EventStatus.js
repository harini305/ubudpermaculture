"use client";

import { useEffect, useState } from "react";

// Shows whether a published event date is still ahead. Rendered after mount so the
// static HTML never claims a status that may have gone out of date.
export default function EventStatus({ endsAt, upcoming, past, className }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    setState(Date.now() > new Date(endsAt).getTime() ? "past" : "upcoming");
  }, [endsAt]);
  if (!state) return null;
  return (
    <p className={className} role="status">
      {state === "past" ? past : upcoming}
    </p>
  );
}
