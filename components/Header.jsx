export default function Header() {
  return (
    <header className="relative z-50 w-full">
      <div className="container">
        <nav aria-label="Global" className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center pt-8 py-[1rem]">
            <a className="max-w-[220px]" href="/">
              <img src="images/main-logo.png" alt="main logo" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
