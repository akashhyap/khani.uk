import Link from "next/link";

const FooterLink = ({ blok }) => {
  return (
    <Link
      href={`/${blok.link.cached_url}`}
      className="menulinks text-lg md:text-sm font-medium text-black hover:text-gray-900">
      {blok.name}
    </Link>
  );
};

export default FooterLink;
