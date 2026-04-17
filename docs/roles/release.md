# Release / DevOps 운영 문서

이 문서는 `giec-homepage` 저장소를 Release / DevOps Engineer 관점에서 운영하기 위한 기준 문서다. 목적은 빌드 안정성, GitHub Pages 배포 준비성, 산출물 관리 상태, 릴리스 점검 순서를 명확히 남기는 것이다.

## 현재 빌드 / 배포 구조

- 애플리케이션은 Create React App 기반이다.
- 진입점은 `src/index.js`, 루트 컴포넌트는 `src/App.js`다.
- 정적 원본 자산은 `public/index.html`과 `public/**`에 있고, 컴포넌트 전용 이미지와 스타일은 `src/components/**`에 있다.
- 배포 대상은 `build/` 출력물을 GitHub Pages로 올리는 구조다.
- `.gitignore`에 `/build`가 포함되어 있어, `build/`는 로컬 생성물로 취급된다.
- 다만 루트의 `static/` 디렉터리는 Git 추적 대상이며, `static/js/**`, `static/css/**` 같은 번들 산출물이 체크인되어 있다.

## 현재 검증 결과

- 기본 셸 기준 `node -v`는 `v8.17.0`, `npm -v`는 `6.13.4`다.
- 이 기본 셸에서는 `npm run build`가 `SyntaxError: Unexpected token {` 로 실패한다.
- `PATH=$HOME/.nvm/versions/node/v20.17.0/bin:$PATH npm run build` 기준으로는 빌드가 성공한다.
- Node 20 기준 빌드 산출물은 생성되지만 경고가 남아 있다.
  - `Menu_v2` 컴포넌트명 PascalCase 경고
  - `Footer.js`의 `href="#"` 접근성 경고
  - `Menu_v2.js`의 미사용 `toggleMenu`
  - `Technology.js`의 중복 alt 텍스트 경고
- 즉 현재 릴리스의 1차 블로커는 기본 셸 런타임이고, 2차 블로커는 경고와 자산 경로 정합성이다.

## `package.json` 기준 스크립트

- `npm start`: `react-scripts start`
- `npm run build`: `react-scripts build`
- `npm test`: `react-scripts test`
- `npm run eject`: `react-scripts eject`
- `npm run deploy`: `gh-pages -d build`

의미상 `deploy`는 `build/`가 먼저 성공적으로 생성되어 있어야 동작한다. 현재 `package.json`에는 `build` 실행 후 `deploy`를 묶는 별도 배포 오케스트레이션은 없다.

## GitHub Pages 가정

- `package.json.homepage`는 `https://gaetaeng.github.io/giec-homepage/`로 설정되어 있다.
- 이 값은 CRA가 정적 리소스 경로를 계산할 때 기준이 된다.
- `src/components/Menu_v2.js`에는 로고 링크가 `<a href="/giec-homepage/">`로 하드코딩되어 있다.
- `public/index.html`은 `%PUBLIC_URL%/favicon.ico`, `%PUBLIC_URL%/manifest.json`, `%PUBLIC_URL%/2000-00459_logo.png` 같은 CRA 표준 참조를 사용한다.
- 따라서 저장소가 GitHub Pages의 리포지토리 서브패스 `https://gaetaeng.github.io/giec-homepage/` 아래에서 서비스된다는 가정이 현재 코드에 박혀 있다.

## 체크인된 산출물 상태

- Git 추적 중인 소스는 `src/**`, `public/**`, `package.json`, `package-lock.json`, `.gitignore`다.
- Git 추적 중인 정적 산출물은 루트의 `static/**`이다.
- Git 추적 중인 루트 빌드 산출물 성격 파일로 `asset-manifest.json`, `index.html`, `manifest.json`, `robots.txt`도 존재한다.
- Git 추적 중인 `static/**`에는 번들 JS/CSS, source map, license 텍스트가 포함된다.
- 로컬 작업공간에는 `build/**`가 생성되어 있지만, 현재는 Git 추적 대상이 아니다.
- 즉, 이 저장소는 소스와 함께 일부 루트/`static` 빌드 산출물을 커밋해 둔 상태이며, `build/`는 배포 직전 생성물로 분리되어 있다.

## 배포 리스크

- `package.json.homepage`와 `src/components/Menu_v2.js`의 하드코딩 경로가 다르면 GitHub Pages에서 상대 경로가 깨질 수 있다.
- `public/index.html`의 `og:image`, `twitter:image`, `apple-touch-icon`은 `%PUBLIC_URL%/2000-00459_logo.png`를 가리키지만, 저장소에서 확인되는 로고 자산은 `public/2000-00459_logo.jpg`와 `src/components/img/2000-00459_logo.jpg`다. 배포 시 메타 이미지가 누락될 수 있다.
- `static/`에 체크인된 번들이 실제 최신 소스와 다르면, 저장소 상태만 보고는 배포 결과를 오해할 수 있다.
- `deploy` 스크립트는 `gh-pages` 패키지에 의존하므로, `npm install` 상태가 깨지면 릴리스가 막힌다.
- `build/`가 `.gitignore`에 있으므로, 로컬에서 생성된 최신 빌드가 실제 배포 전에 누락될 수 있다.
- CRA 기본 구성상 라우팅을 새로 추가하면 GitHub Pages의 새로고침 동작과 정적 경로가 다시 검증되어야 한다.
- 기본 셸이 Node 8에 머물러 있으면 빌드 자체가 실행되지 않으므로, 배포 전 Node 런타임 통일이 선행돼야 한다.

## 릴리스 체크리스트

1. `npm install` 상태와 `package-lock.json`이 일치하는지 확인한다.
2. `node -v`를 먼저 확인하고, 최소 검증 기준인 Node 20 계열로 맞춘다.
3. `npm run build`를 실행해 `build/`가 정상 생성되는지 확인한다.
4. ESLint 경고와 누락 자산 경고 가능성을 함께 확인한다.
5. `public/index.html`의 메타 이미지 참조가 실제 파일과 일치하는지 확인한다.
6. `src/components/Menu_v2.js`의 `/giec-homepage/` 하드코딩이 배포 URL과 일치하는지 확인한다.
7. `build/` 안의 `index.html`, `static/js/**`, `static/css/**`, `asset-manifest.json`을 점검한다.
8. 정적 자산 경로 변경이 있으면 GitHub Pages 서브패스에서 404가 없는지 확인한다.
9. 필요 시 `npm run deploy`로 `gh-pages -d build` 배포를 수행한다.
10. 배포 후 실제 서비스 URL `https://gaetaeng.github.io/giec-homepage/`에서 첫 화면과 주요 라우트를 확인한다.

## 운영 원칙

- 변경 범위는 `package.json`, 배포 스크립트, 정적 경로, 빌드 검증에 우선순위를 둔다.
- 다른 에이전트가 수정한 소스는 되돌리지 않는다.
- 릴리스 판단은 코드 리뷰 감각이 아니라 실제 `build/` 결과와 배포 경로 일치 여부로 결정한다.
