import { getPost } from "@/api/getPost";
import { ResponsiveContainer } from "@/components";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // TODO: FETCH POST AND CORRECT DISPLAY - CHANGES WITH LAYOUT
  const post = await getPost(Number(slug));

  return (
    <ResponsiveContainer
      topPadding={false}
      className="pt-[54px] pb-[122px] mb-6"
    >
      <h2 className="font-playfair-display text-3xl text-dark-blue mb-9">Proin semper mi orci, quis tempor enim placerat nec Cras commodo, massa nec tempor posuere, sapien risus porttitor risus, vitae maximus dui felis sed mi. Maecenas rutrum malesuada urna, in luctus metus fringilla ac. Cras commodo, massa nec tempor posuere, sapien risus porttitor risus.</h2>
      <h3 className="font-playfair-display text-xl text-dark-blue">Proin semper mi orci, quis tempor enim placerat nec Cras commodo, massa nec tempor posuere, sapien risus porttitor risus, vitae maximus dui felis sed mi. Maecenas rutrum malesuada urna, in luctus metus fringilla ac. Cras commodo, massa nec tempor posuere, sapien risus porttitor risus.</h3>
    </ResponsiveContainer>
  )
}
