const items = [
  {
    k: "筋",
    t: "근육전문 타겟 케어",
    d: "뭉친 근육의 위치와 깊이를 정확히 진단, 근막까지 파고들어 풀어드리는 근육전문 기법.",
  },
  {
    k: "強",
    t: "진짜 강한 압",
    d: "어설프게 쓰다듬는 마사지 아닙니다. 근육 깊숙한 곳까지 파고드는 힘 있는 손.",
  },
  {
    k: "精",
    t: "정확한 포인트",
    d: "10년 경력 관리사가 체형·통증 부위를 진단 후 정확히 짚어 풀어드립니다.",
  },
  {
    k: "近",
    t: "오남·남양주 접근성",
    d: "남양주 오남읍, 진건오남로. 차량 주차 가능, 퇴근 후 들르기 좋은 위치.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-brand-900 py-20 text-brand-50 sm:py-28">
      <div
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(135deg,transparent_0_49%,#b96322_49%_51%,transparent_51%)] [background-size:40px_40px]"
        aria-hidden
      />
      <div className="container-narrow relative">
        <p className="text-xs font-bold tracking-[0.3em] text-brand-300">WHY 身의손</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-black leading-[1.25] sm:text-5xl sm:leading-[1.18]">
          왜 오남·남양주 분들이
          <br />
          근육전문 신의손만
          <br />
          다시 찾을까요?
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.k}
              className="rounded-2xl border border-brand-700/50 bg-brand-800/40 p-6 backdrop-blur"
            >
              <p className="font-serif text-5xl font-black text-brand-300">{it.k}</p>
              <h3 className="mt-4 text-lg font-black text-brand-50">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-200/90">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
