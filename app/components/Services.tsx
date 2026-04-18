const services = [
  {
    tag: "01",
    title: "근육전문 마사지",
    desc: "뭉친 근육을 깊숙한 곳까지 풀어드리는 대표 시그니처. 목·어깨·등·허리 통증에 가장 효과적.",
    highlights: ["전신 근육 60분", "목·어깨 집중 40분", "허리·골반 60분"],
    featured: true,
  },
  {
    tag: "02",
    title: "통증관리 마사지",
    desc: "깊숙한 근막까지 풀어내는 통증관리. 거북목·어깨결림·만성 근육통 타겟 케어.",
    highlights: ["근막이완 집중", "만성 통증 완화"],
  },
  {
    tag: "03",
    title: "경락 마사지",
    desc: "근육 이완과 함께 경혈을 자극해 기혈 순환을 돕는 전통 경락 테라피. 만성 피로·부종에 효과.",
    highlights: ["전신 경락 60분", "부분 경락 30분"],
  },
  {
    tag: "04",
    title: "신체관리 · 바디케어",
    desc: "체형 관리와 순환 케어. 부기·셀룰라이트·체형 불균형 맞춤 관리로 컨디션 회복.",
    highlights: ["복부·다리 관리", "체형밸런스 관리"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-narrow">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-brand-500">SERVICES</p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-[1.25] text-brand-900 sm:text-5xl sm:leading-[1.18]">
              오남·남양주
              <br />
              근육전문 마사지.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-brand-600 md:block">
            뭉친 근육을 집중 타겟팅. 근육전문 기법에 경락·통증관리까지 몸 상태에 맞춰 조절합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.tag}
              className={`group relative overflow-hidden rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10 ${
                s.featured
                  ? "border-brand-900 bg-brand-900 text-brand-50"
                  : "border-brand-100 bg-brand-50/60 hover:border-brand-300"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`font-mono text-xs font-bold ${
                    s.featured ? "text-brand-300" : "text-brand-400"
                  }`}
                >
                  {s.tag}
                </span>
                <div className="flex items-center gap-2">
                  {s.featured && (
                    <span className="rounded-full bg-brand-300 px-3 py-1 text-[10px] font-black tracking-widest text-brand-900">
                      SIGNATURE
                    </span>
                  )}
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full transition ${
                      s.featured
                        ? "bg-brand-50 text-brand-900 group-hover:bg-brand-300"
                        : "bg-brand-900 text-brand-50 group-hover:bg-brand-600"
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
              <h3
                className={`mt-8 font-serif text-2xl font-black ${
                  s.featured ? "text-brand-50" : "text-brand-900"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  s.featured ? "text-brand-100/90" : "text-brand-700"
                }`}
              >
                {s.desc}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <li
                    key={h}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      s.featured
                        ? "bg-brand-800/60 text-brand-100 ring-1 ring-brand-700"
                        : "bg-white text-brand-700 ring-1 ring-brand-200"
                    }`}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
