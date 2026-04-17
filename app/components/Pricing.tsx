const menu = [
  { name: "부분 경락 (목·어깨)", time: "30분", price: "문의" },
  { name: "등·허리 집중 관리", time: "40분", price: "문의" },
  { name: "전신 경락 마사지", time: "60분", price: "문의" },
  { name: "프리미엄 풀바디", time: "90분", price: "문의" },
  { name: "신체관리 · 바디케어", time: "맞춤", price: "문의" },
];

export default function Pricing() {
  return (
    <section id="price" className="bg-brand-50 py-20 sm:py-28">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-brand-500">MENU</p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-brand-900 sm:text-5xl">
              시술 메뉴
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-brand-700">
              정확한 가격은 부위·시간·컨디션에 따라 달라집니다.
              전화 상담 후 몸 상태에 맞는 코스를 추천해드려요.
            </p>
            <a href="tel:01034195755" className="mt-6 inline-flex cta-primary">
              가격 문의 · 예약
            </a>
          </div>

          <ul className="divide-y divide-brand-200 overflow-hidden rounded-3xl border border-brand-200 bg-white">
            {menu.map((m) => (
              <li
                key={m.name}
                className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-brand-50/60"
              >
                <div>
                  <p className="font-bold text-brand-900">{m.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-brand-500">{m.time}</p>
                </div>
                <span className="font-mono text-sm font-bold text-brand-700">{m.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
