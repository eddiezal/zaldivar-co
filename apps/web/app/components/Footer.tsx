'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-6 px-4 border-t mt-16 text-sm text-center text-neutral-500">
      <div className="flex justify-center items-center gap-6 flex-wrap">
        <a
          href="https://vercel.com/templates?search=turborepo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:underline"
        >
          <Image
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            aria-hidden
          />
          Examples
        </a>
        <a
          href="https://turbo.build"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:underline"
        >
          <Image
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            aria-hidden
          />
          Go to turbo.build →
        </a>
      </div>
    </footer>
  );
}
