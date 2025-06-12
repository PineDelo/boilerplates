# React + TypeScript + Vite Boilerplate

이 프로젝트는 Vite 기반 React-ts template으로 생성된 보일러플레이트입니다.

## 패키지 매니저

이 프로젝트는 [pnpm](https://pnpm.io/)을 패키지 매니저로 사용합니다. pnpm은 디스크 공간을 효율적으로 사용하고, 설치 속도가 빠르며, 엄격한 의존성 관리를 제공합니다.

### pnpm 설치

```bash
# npm을 사용하여 pnpm 설치
npm install -g pnpm

# 또는 curl을 사용하여 설치 (macOS/Linux)
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## 주요 기능

- ⚡️ Vite를 사용한 빠른 개발 환경
- 🔥 React 18
- 📦 TypeScript
- 🎨 Prettier를 통한 코드 포맷팅
<!-- - 📱 반응형 디자인 지원 -->
- 🛣️ React Router v6
- 📝 ESLint 설정
- 🔄 Hot Module Replacement (HMR)

## 설치된 라이브러리

### 핵심 의존성

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^7.6.2

### 개발 의존성

- `@types/node`: ^24.0.1
- `@types/react`: ^18.2.0
- `@types/react-dom`: ^18.2.0
- `@trivago/prettier-plugin-sort-imports`: ^5.2.2
- `@vitejs/plugin-react`: ^4.2.0
- `prettier`: ^3.5.3
- `typescript`: ^5.0.0
- `vite`: ^5.0.0

## 시작하기

```bash
# 저장소 클론
git clone [repository-url]

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build
```

## 프로젝트 구조

```
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── pages/         # 페이지 컴포넌트
│   ├── routes.tsx     # 라우터 설정
│   ├── App.tsx        # 메인 앱 컴포넌트
│   └── main.tsx       # 앱 진입점
├── public/            # 정적 파일
├── .vscode/          # VS Code 설정
├── .prettierrc       # Prettier 설정
├── tsconfig.json     # TypeScript 설정
└── vite.config.ts    # Vite 설정
```

## 주요 설정

### TypeScript

- `tsconfig.json`에서 TypeScript 설정을 관리합니다.
- 경로 별칭(@)을 사용하여 절대 경로 임포트를 지원합니다.

### Prettier

- 코드 스타일을 자동으로 포맷팅합니다.
- import 문을 자동으로 정렬합니다.
- VS Code 저장 시 자동 포맷팅을 지원합니다.

### VS Code 설정

- `.vscode/settings.json`에 포함된 설정으로 일관된 개발 환경을 제공합니다.
- 파일 저장 시 자동 포맷팅이 적용됩니다.

## 라이선스

MIT
