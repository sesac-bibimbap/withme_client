# WithMe 프로젝트 - Client

1. 프로젝트 실행

```bash
$ yarn create vite .
```

2. git 컨벤션 설정

```bash
yarn add -D commitizen cz-customizable
```

- `.cz-config.js` 파일 추가
- `package.json` 설정 추가
  - `type: module` 옵션 삭제

3. prettier/es-lint/vscode 세팅 맞추기

```bash
$ yarn add -D eslint prettier
$ yarn add -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-jsx-a11y
```

3. tsconfig.json에 경로설정
4. `husky`의 `pre-push`를 사용하여 master branch로 바로 push 되는 것을 방지

```bash
$ npx husky-init && yarn
$ npx husky add .husky/pre-push '명령어'
```

- 배포테스트
