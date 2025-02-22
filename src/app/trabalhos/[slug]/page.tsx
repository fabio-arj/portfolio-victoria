import { works } from "@/lib/works";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.id == slug);
  return (
    <div className="w-full text-black">
      <div
        className="px-16 py-20 space-y-3"
        style={{ backgroundColor: work?.color }}
      >
        <h1 className="font-abril font-semibold text-4xl">{work?.title}</h1>
        <p className="text-sm">{work?.description}</p>
      </div>
      <div className="px-28 py-20">
        <p className="text-center text-base">{work?.text}</p>
      </div>
    </div>
  );
}
