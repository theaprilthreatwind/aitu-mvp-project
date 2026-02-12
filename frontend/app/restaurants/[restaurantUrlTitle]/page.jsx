import { Restaurant } from "@/views";

export default async function page({ params }) {
  return <Restaurant params={params} />;
}
