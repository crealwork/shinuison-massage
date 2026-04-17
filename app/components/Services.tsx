const services = [
  {
    tag: "01",
    title: "경락 마사지",
    desc: "막힌 경혈과 경락을 풀어 기혈순환을 돕는 전통 동양 마사지. 만성 피로·부종 개선에 효과적.",
    highlights: ["전신 경락 60분", "등·어깨 집중 30분"],
  },
  {
    tag: "02",
    title: "강한압 통증 마사지",
    desc: "뭉친 근육 깊숙한 곳까지 파고드는 강한 압. 거북목·어깨결림·허리통증 타겟 케어.",
    highlights: ["목·어깨 집중 40분", "허리·골반 60분"],
  },
  {
    tag: "03",
    title: "시원한 전신 마사지",
    desc: "발끝부터 두피까지, 진짜 시원한 손맛으로 하루 피로를 단번에 해소하는 풀바디 코스.",
    highlights: ["풀바디 90분", "풀바디 120분"],
  },
  {
    tag: "04",
    title: "신체관리 · 바디케어",
    desc: "체형 교정과 순환 관리를 병행하는 바디케어. 부기·셀룰라이트·체형불균형 맞춤 관리.",
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
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-brand-900 sm:text-5xl">
              오남에서 가장
              <br />시원한 손맛.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-brand-600 md:block">
            전통 경락부터 현대식 통증관리까지, 몸 상태에 맞춰 강도와 부위를 조절합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.tag}
              className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50/60 p-7 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs font-bold text-brand-400">{s.tag}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-900 text-brand-50 transition group-hover:bg-brand-600">
                  →
                </span>
              </div>
              <h3 className="mt-8 font-serif text-2xl font-black text-brand-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-700">{s.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200"
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
