import FavoriteButton from "./FavoriteButton";
import Header from "./Header";
import Logo from "./Logo";
import Separator from "./Separator";

export default function Navbar({ slug }: { slug: string }) {
	console.log("->", slug)
  return (
    <>
      <Logo />
      <Separator />
			<div className="flex w-full justify-between items-center mb-[50px]">
				<Header goBack={!!slug?.length} href={!!slug?.length ? "/" : undefined} textKey="home.header" className={`${!!slug?.length ? "mb-0" : ""}`} />
				{!slug && <FavoriteButton />}
			</div>
    </>
  );
}
