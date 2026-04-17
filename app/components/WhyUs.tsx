const items = [
  {
    k: "強",
    t: "진짜 강한 압",
    d: "어설프게 쓰다듬는 마사지 아닙니다. 뭉친 근육 깊숙한 곳까지 파고드는 힘 있는 손.",
  },
  {
    k: "精",
    t: "정확한 포인트",
    d: "10년 경력의 관리사가 체형과 통증 부위를 진단 후 정확히 짚어 풀어드립니다.",
  },
  {
    k: "經",
    t: "전통 경락 노하우",
    d: "단순 근육 마사지를 넘어 기혈 순환까지 고려한 동양 경락 테라피.",
  },
  {
    k: "近",
    t: "오남·진접 접근성",
    d: "오남읍·진접읍 경계 위치. 차량 주차 가능, 가까워서 퇴근 후 바로 들르기 좋습니다.",
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
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-black leading-tight sm:text-5xl">
          왜 오남 분들이
          <br />
          여기만 다시 찾을까요?
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
