export default function Footer() {
  return (
    <footer className="bg-brand-900 pb-28 pt-16 text-brand-200 md:pb-16">
      <div className="container-narrow">
        <div className="flex flex-col gap-8 border-b border-brand-800 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 font-serif text-2xl font-black text-brand-900">
                身
              </span>
              <div>
                <p className="text-lg font-black text-brand-50">身의손 마사지</p>
                <p className="text-xs tracking-widest text-brand-400">오남 · 진접 경락전문</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-300">
              진짜 시원한 강한 압, 정확한 포인트. 10년 경력 관리사가 운영하는
              오남·진접 경락·통증 전문 마사지샵.
            </p>
          </div>
          <a href="tel:01034195755" className="cta-primary">
            010-3419-5755
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 身의손 마사지. All rights reserved.</p>
          <p className="tracking-wide">오남 마사지 · 진접 마사지 · 경락 · 통증 · 신체관리</p>
        </div>
      </div>
    </footer>
  );
}
