export default function Footer() {
  const links = [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Code",
      link: "/category/code",
    },
    {
      text: "Contact",
      link: "#",
    },
    {
      text: "Privacy",
      link: "/privacy",
    },
    {
      text: "Setup",
      link: "/setup",
    },
    {
      text: "Sitemap",
      link: "/sitemap",
    },
  ];
  return (
    <footer className="pb-16 mt-24">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 h-[2px]"></div>
          <div className="pt-8 flex items-center justify-between md:flex-row flex-col-reverse gap-8">
            <p className="font-medium text-base leading-6 text-slate-500 text-center">
              © 2005 — 2022 OpenTools®. All rights reserved.
            </p>
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center font-medium text-base text-slate-500">
              {links.map((link) => (
                <div className="py-2 px-5" key={link.text}>
                  <a className="hover:text-gray-900" href={link.link}>
                    {link.text}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
