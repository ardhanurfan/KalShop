export default function toTitleCase(string: string): string {
  return string
    .replace("-", " ")
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
