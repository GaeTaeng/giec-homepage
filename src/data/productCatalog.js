import product01 from '../components/img/2000-00459_cat_1_large_img1.jpg';
import product02 from '../components/img/2000-00459_cat_2_large_img1.jpg';
import product03 from '../components/img/2000-00459_cat_3_large_img1.jpg';
import product04 from '../components/img/2000-00459_cat_4_large_img1.jpg';
import product05 from '../components/img/2000-00459_cat_5_large_img1.jpg';
import product06 from '../components/img/2000-00459_cat_6_large_img1.jpg';

export const productFamilies = [
  {
    slug: 'controllers',
    title: '컨트롤러',
    summary: '사출성형기와 자동화 설비에 맞춘 주문형 제어 솔루션입니다.',
    detail:
      '공정 이해가 쉬운 UI와 유지보수 편의성을 바탕으로 현장 적용성을 높인 제품군입니다.',
  },
  {
    slug: 'proportional-valves',
    title: '비례밸브 제어',
    summary: '비례밸브 출력 제어와 상태 확인을 안정적으로 수행합니다.',
    detail:
      '소형 사이즈, 채널 확장성, 확인 편의성을 중심으로 설계된 제어 제품군입니다.',
  },
  {
    slug: 'heaters',
    title: '히터 및 주변장치',
    summary: '내구성과 열전달 효율을 강화한 히터 및 부품군입니다.',
    detail:
      '주문 제작형 대응과 빠른 납품이 가능한 주변장치 제품군으로 운영됩니다.',
  },
  {
    slug: 'output-cards',
    title: '출력 카드',
    summary: '범용 입출력 처리와 현장 설치 효율을 고려한 카드형 제품군입니다.',
    detail:
      'RELAY, TR, SSR 유형으로 구분되며 점검성과 가격 경쟁력을 함께 고려했습니다.',
  },
];

export const products = [
  {
    slug: 'gi-5000ti',
    familySlug: 'controllers',
    code: 'GI-5000TI',
    name: '사출성형기 콘트롤러',
    summary: '운용이 쉽고 공정 상태를 빠르게 파악할 수 있는 사출성형기 제어기입니다.',
    heroImage: product01,
    image: product01,
    highlights: [
      '공정별 동작 확인이 쉬운 사용자 인터페이스',
      '근접 센서와 포텐셔미터 기반 위치 제어 선택 가능',
      '모듈화 회로 구조로 유지보수 편의성 확보',
    ],
    applications: ['사출성형 설비', '유압 구동 설비', '주문형 제어 패널'],
    specs: [
      { label: '전원', value: 'AC 220V / 60Hz' },
      { label: '특징', value: '사용자 임의의 PLC 선택 대응' },
      { label: '운영', value: '공정 상태 확인과 주문 제작 대응' },
    ],
    legacyUrl: 'http://giec.koreasme.com/',
  },
  {
    slug: 'gi-400pv-2',
    familySlug: 'proportional-valves',
    code: 'GI-400PV-2',
    name: '비례밸브 콘트롤러',
    summary: '2CH부터 4CH까지 용도에 맞게 선택 가능한 비례밸브 전용 제어기입니다.',
    heroImage: product02,
    image: product02,
    highlights: [
      '채널별 출력 확인이 가능한 선택 스위치 구성',
      '소형 사이즈로 설치 효율 향상',
      '기능 대비 단가 경쟁력 확보',
    ],
    applications: ['사출성형기', '유압프레스', '비례변 제어장치'],
    specs: [
      { label: '전원', value: 'AC 220V / 60Hz / MAX 110VA' },
      { label: '채널', value: '2CH ~ 4CH 선택 가능' },
      { label: '용도', value: '비례밸브 출력 제어' },
    ],
    legacyUrl: 'http://giec.koreasme.com/',
  },
  {
    slug: 'gi-band-s1',
    familySlug: 'heaters',
    code: 'GI-BAND-S1',
    name: '밴드히터',
    summary: '체결성과 열전도 효율을 강화한 주문 제작형 밴드히터입니다.',
    heroImage: product03,
    image: product03,
    highlights: [
      '클램프 방식 체결로 작업 시간 단축',
      '일반용/보온용 2가지 타입 대응',
      '우수한 절연성과 열전달 특성 확보',
    ],
    applications: ['사출성형기 실린더', '압출기 실린더', '주문형 가열 설비'],
    specs: [
      { label: '타입', value: '일반용 / 보온용' },
      { label: '제작', value: '주문 제작 대응' },
      { label: '특징', value: '고급 운모판 사용' },
    ],
    legacyUrl: 'http://giec.koreasme.com/',
  },
  {
    slug: 'relay-output-card',
    familySlug: 'output-cards',
    code: 'GI-RELAY-8',
    name: 'RELAY 출력 카드',
    summary: '범용 현장에 적용하기 쉬운 8점 단위 RELAY 출력 카드입니다.',
    heroImage: product04,
    image: product04,
    highlights: [
      '단자대 방식 입출력',
      'LED를 통한 동작 상태 확인',
      'TNR 기반 접점 보호 회로 적용',
    ],
    applications: ['범용 제어반', '주문형 제어 시스템', '입출력 확장'],
    specs: [
      { label: '구성', value: '8점 단위' },
      { label: '입출력', value: '단자대 방식' },
      { label: '보호', value: '접점 보호 회로' },
    ],
    legacyUrl: 'http://giec.koreasme.com/',
  },
  {
    slug: 'tr-output-card',
    familySlug: 'output-cards',
    code: 'GI-TR-8',
    name: 'TR 출력 카드',
    summary: '입출력 LED와 보호 회로를 갖춘 TR 출력 카드입니다.',
    heroImage: product05,
    image: product05,
    highlights: [
      '입력과 출력 모두 LED 상태 확인 가능',
      '공간 절약형 설계',
      '과전압 보호 회로 삽입',
    ],
    applications: ['제어반 증설', '범용 출력 장치', '현장 제어 시스템'],
    specs: [
      { label: '구성', value: '8점 단위' },
      { label: '보호', value: '과전압 보호 회로' },
      { label: '특징', value: '소형 사이즈 / 저비용' },
    ],
    legacyUrl: 'http://giec.koreasme.com/',
  },
  {
    slug: 'ssr-output-card',
    familySlug: 'output-cards',
    code: 'GI-SSR-8',
    name: 'SSR 출력 카드',
    summary: '소형 설치와 범용 제어에 적합한 SSR 출력 카드입니다.',
    heroImage: product06,
    image: product06,
    highlights: [
      '단자대 기반 범용 입출력',
      'LED 상태 표시',
      '작업 공간 절감형 구성',
    ],
    applications: ['출력 제어 모듈', '범용 자동화 설비', '제어 시스템 증설'],
    specs: [
      { label: '구성', value: '8점 단위' },
      { label: '입출력', value: '단자대 방식' },
      { label: '특징', value: '저비용 / 범용 대응' },
    ],
    legacyUrl: 'http://giec.koreasme.com/',
  },
];

export const featuredProductSlugs = ['gi-5000ti', 'gi-400pv-2', 'gi-band-s1'];
