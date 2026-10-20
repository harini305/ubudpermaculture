import posts from "@/data/posts.json";

export const POSTS = posts;
export const getPost = (slug) => posts.find((p) => p.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const excerpt = (post, length = 180) => {
  const first = post.blocks.find((b) => b.type === "p")?.text ?? "";
  return first.length > length ? `${first.slice(0, first.lastIndexOf(" ", length))}…` : first;
};
