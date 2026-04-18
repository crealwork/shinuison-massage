export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-200 bg-white/95 backdrop-blur-lg shadow-[0_-8px_24px_rgba(0,0,0,0.06)] md:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-1">
          <p className="text-[11px] font-medium text-brand-500">오남·남양주 근육전문 마사지</p>
          <p className="text-sm font-bold text-brand-900">바로 예약 전화</p>
        </div>
        <a
          href="tel:01034195755"
          className="flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-bold text-white shadow-lg shadow-brand-600/30 active:scale-95"
          aria-label="전화 걸기 010-3419-5755"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.58 3.6 1 1 0 01-.25 1z" />
          </svg>
          010-3419-5755
        </a>
      </div>
    </div>
  );
}
