export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100/70 bg-brand-50/80 backdrop-blur-xl">
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="신의손 마사지 홈">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-900 font-serif text-xl font-black text-brand-50">
            身
          </span>
          <div className="leading-tight">
            <p className="text-sm font-black tracking-tight text-brand-900">身의손 마사지</p>
            <p className="text-[10px] font-medium tracking-wider text-brand-500">
              오남·남양주 근육전문 마사지
            </p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-brand-700 md:flex">
          <a href="#services" className="hover:text-brand-900">시술</a>
          <a href="#why" className="hover:text-brand-900">특장점</a>
          <a href="#price" className="hover:text-brand-900">가격</a>
          <a href="#visit" className="hover:text-brand-900">오시는길</a>
        </nav>
        <a
          href="tel:01034195755"
          className="hidden items-center gap-2 rounded-full bg-brand-900 px-4 py-2.5 text-sm font-bold text-brand-50 md:inline-flex"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.58 3.6 1 1 0 01-.25 1z" />
          </svg>
          010-3419-5755
        </a>
      </div>
    </header>
  );
}
