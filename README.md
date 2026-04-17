# 身의손 마사지 (신의손 마사지) — 오남·진접 경락마사지

Next.js 15 App Router 기반 SEO 최적화 랜딩 페이지.

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000

## 빌드 & 배포

```bash
npm run build
npm run start
```

Vercel 배포 권장 — `vercel` 커맨드 후 연결만 하면 자동 배포.

## SEO 체크리스트

- [x] `metadataBase` + 절대 URL OG 이미지
- [x] `title.template` — 페이지별 브랜딩 자동 접미사
- [x] JSON-LD `LocalBusiness` + `HealthAndBeautyBusiness` + `DaySpa`
- [x] `sitemap.ts`, `robots.ts` 자동 생성
- [x] 한국어 `lang="ko"`, `locale="ko_KR"`
- [x] `tel:` 링크 + `formatDetection.telephone: true`
- [x] 메인 키워드 "오남 마사지" 본문/메타/JSON-LD 반복
- [ ] `public/og.jpg` 1200x630 이미지 추가 필요
- [ ] `app/layout.tsx`에 구글 서치콘솔 / 네이버 웹마스터 인증코드 입력
- [ ] 실제 주소 (도로명) 채우기
- [ ] 실제 가격 공개 시 `Pricing.tsx`의 "문의" 교체

## 커스터마이징 포인트

| 파일 | 역할 |
|---|---|
| `app/layout.tsx` | 메타데이터, JSON-LD 스키마 (로컬 SEO 핵심) |
| `app/components/Hero.tsx` | 메인 비주얼, 카피 |
| `app/components/Services.tsx` | 시술 메뉴 4종 |
| `app/components/Pricing.tsx` | 가격표 |
| `app/components/Visit.tsx` | 주소·지도 (iframe 좌표 교체 가능) |
| `tailwind.config.ts` | 브랜드 컬러 (테라코타 팔레트) |

## 배포 후 필수

1. 구글 서치콘솔 등록 → `layout.tsx > verification.google` 인증코드
2. 네이버 웹마스터 도구 등록 → `verification.other['naver-site-verification']`
3. 네이버 플레이스·구글 마이비즈니스 등록 (로컬 SEO 필수)
4. 카카오맵/네이버지도 사업장 주소 등록 — `sameAs` 배열에 링크 추가
