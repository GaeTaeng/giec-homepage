export const primaryNav = [
  { label: '회사소개', to: '/company' },
  { label: '제품소개', to: '/product' },
  { label: '기술현황', to: '/technology' },
  { label: '알림마당', to: '/board' },
];

export const navigationSections = [
  {
    title: '회사소개',
    description: '신뢰와 기술을 기반으로 한 GI전자의 기업 정보를 소개합니다.',
    items: [
      { label: '인사말', to: '/company/greeting' },
      { label: '연혁', to: '/company/history' },
      { label: '오시는길', to: '/company/location' },
    ],
  },
  {
    title: '제품소개',
    description: '대표 제품군과 주문 제작형 제어 솔루션을 확인해보세요.',
    items: [
      { label: '제품 허브', to: '/product' },
    ],
  },
  {
    title: '기술현황',
    description: '유지보수와 제어기술 중심의 핵심 역량을 소개합니다.',
    items: [
      { label: '기술현황', to: '/technology' },
    ],
  },
  {
    title: '알림마당',
    description: '공지사항과 자유게시판을 통해 최신 소식을 확인하세요.',
    items: [
      { label: '공지사항', to: '/board/notice' },
      { label: '자유게시판', to: '/board/free' },
    ],
  },
  {
    title: '고객지원',
    description: '문의와 방문 안내를 빠르게 확인할 수 있도록 구성했습니다.',
    items: [
      { label: '오시는길', to: '/company/location' },
      { label: '1:1 문의', to: '/board/free/write' },
    ],
  },
];
