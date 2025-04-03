'use client';

export function Header() {
  return (
    <header className="py-6 px-4 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Zaldivar & Co.</h1>
        <nav className="space-x-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/case-studies" className="hover:underline">Case Studies</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
