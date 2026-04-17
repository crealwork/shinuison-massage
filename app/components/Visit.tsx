export default function Visit() {
  return (
    <section id="visit" className="bg-white py-20 sm:py-28">
      <div className="container-narrow grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-brand-500">VISIT</p>
          <h2 className="mt-3 font-serif text-3xl font-black leading-[1.25] text-brand-900 sm:text-5xl sm:leading-[1.18]">
            오시는 길
          </h2>
          <dl className="mt-8 space-y-5 text-brand-800">
            <div className="flex gap-4">
              <dt className="w-20 flex-shrink-0 text-xs font-bold tracking-wider text-brand-500">
                주소
              </dt>
              <dd className="font-semibold leading-relaxed">
                경기도 남양주시 오남읍
                <br />
                진건오남로884번길 20, 1층 일부
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 flex-shrink-0 text-xs font-bold tracking-wider text-brand-500">
                전화
              </dt>
              <dd>
                <a href="tel:01034195755" className="font-bold text-brand-900 underline-offset-4 hover:underline">
                  010-3419-5755
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 flex-shrink-0 text-xs font-bold tracking-wider text-brand-500">
                영업시간
              </dt>
              <dd className="font-semibold">매일 10:00 – 24:00 (연중무휴)</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 flex-shrink-0 text-xs font-bold tracking-wider text-brand-500">
                주차
              </dt>
              <dd className="font-semibold">건물 앞 주차 가능</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:01034195755" className="cta-primary">전화 예약</a>
            <a
              href="https://map.naver.com/p/search/경기도%20남양주시%20오남읍%20진건오남로884번길%2020"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline"
            >
              네이버 지도 열기
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-brand-50">
          <div className="aspect-[4/3] w-full">
            <iframe
              title="身의손 마사지 위치 - 경기도 남양주시 오남읍 진건오남로884번길 20"
              src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%98%A4%EB%82%A8%EC%9D%8D%20%EC%A7%84%EA%B1%B4%EC%98%A4%EB%82%A8%EB%A1%9C884%EB%B2%88%EA%B8%B8%2020&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
