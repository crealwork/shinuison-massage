export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-50">
      <div
        className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#2e1a0d_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden
      />
      <div className="container-narrow relative grid gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-300/60 bg-white/60 px-3 py-1 text-xs font-bold tracking-wide text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            오남 · 진접 · 남양주 경락마사지
          </p>
          <h1 className="mt-5 font-serif text-[2.6rem] font-black leading-[1.05] tracking-tight text-brand-900 sm:text-6xl">
            진짜 시원한
            <br />
            <span className="relative inline-block">
              강한 압
              <span className="absolute -bottom-1 left-0 right-0 h-3 -z-[1] bg-brand-300/70" />
            </span>
            <br />
            오남 마사지.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-700 sm:text-lg">
            <b className="text-brand-900">身의손 마사지</b>는 오남·진접 지역 10년 경력 관리사가
            운영하는 경락·통증 전문 마사지샵입니다. 어설픈 마사지 말고, 뭉친 곳 정확히
            짚어주는 <b>진짜 시원한 손맛</b>을 경험하세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:01034195755" className="cta-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.58 3.6 1 1 0 01-.25 1z" />
              </svg>
              010-3419-5755 예약
            </a>
            <a href="#services" className="cta-outline">
              시술 메뉴 보기
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-brand-200 pt-6 text-left">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-500">경력</dt>
              <dd className="mt-1 text-xl font-black text-brand-900">10년+</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-500">전문</dt>
              <dd className="mt-1 text-xl font-black text-brand-900">경락·통증</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-500">영업</dt>
              <dd className="mt-1 text-xl font-black text-brand-900">연중무휴</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-10 text-brand-50 shadow-2xl shadow-brand-900/30">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-brand-200">ORIENTAL CARE</p>
                <p className="mt-2 text-xs text-brand-200/80">est. 신의손</p>
              </div>
              <div className="text-center">
                <p
                  className="font-serif leading-none text-brand-50"
                  style={{ fontSize: "10rem" }}
                >
                  身
                </p>
                <p className="mt-2 text-sm font-bold tracking-[0.4em] text-brand-200">의 손</p>
              </div>
              <div className="flex items-end justify-between text-[11px] text-brand-200/80">
                <div>
                  <p className="font-semibold text-brand-100">경락 · 통증 · 전신관리</p>
                  <p>오남 · 진접</p>
                </div>
                <p className="font-mono">010·3419·5755</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-brand-200 bg-white px-4 py-3 text-sm font-semibold text-brand-900 shadow-xl sm:block">
            “뭉친 곳 단번에 풀어주는 손”
          </div>
        </div>
      </div>
    </section>
  );
}
