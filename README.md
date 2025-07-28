# 🧱 Boilerplate Template Collection

이 저장소는 다양한 기술 스택의 초기 프로젝트 템플릿(보일러플레이트)을 모아놓은 컬렉션입니다.
상황에 맞는 템플릿을 선택하여 빠르게 프로젝트를 시작하세요.

---

## 📦 템플릿 목록

<table>
  <thead>
    <tr>
      <th style="text-align: left; padding: 8px;">이름</th>
      <th style="text-align: left; padding: 8px;">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left; padding: 8px;"><code><a href="./vite-react-ts">vite-react-ts</a></code></td>
      <td style="text-align: left; padding: 8px;">Vite + React + TypeScript</td>
    </tr>
    <tr>
      <td style="text-align: left; padding: 8px;"><code><a href="./next-react-ts">next-react-ts</a></code></td>
      <td style="text-align: left; padding: 8px;">Next + React + TypeScript</td>
    </tr>
  </tbody>
</table>

## ✅ 사용 방법

템플릿은 아래 3가지 방식으로 사용할 수 있습니다.

### 1. `git sparse-checkout` (부분 clone, 빠름)

```bash
git clone --filter=blob:none --no-checkout https://github.com/PineDelo/boilerplates.git

cd boilertemplate

git sparse-checkout init --cone

git sparse-checkout set vite-react-ts
```

✅ 필요한 디렉토리만 가져오므로 빠르고 용량을 아낄 수 있습니다.

### 2. GitHub 웹에서 개별 폴더 다운로드

1. 위 목록 중 원하는 폴더 클릭
2. 오른쪽 상단의 Download ZIP 클릭
3. 압축 해제 후 사용

✅ Git 설치 없이 웹에서 바로 다운로드 가능

### 3. degit 사용 (폴더를 로컬에 복사)

```bash
npx degit PineDelo/boilerplates/vite-react-ts my-new-app
```
