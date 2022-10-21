# IITP-SW 인재양성 내용 정리 (프론트)

## 설명

IIPT-SW 인재양성 교육 관련된 내용 정리 및 예제 샘플과 APK파일을 포함한 저장소입니다.

## 기간

2022.10.19(수) ~ 2022.11.22(화) (5주)


## 링크

- [Morpheus Wiki](https://wiki.uracle.co.kr/ko/madp/client/api) : 모피어스 API 문서

- [유라클 TV](https://www.youtube.com/channel/UCo7BjcmjaBZiz8zgWpnFMzw) : 교육 영상 참고용


## 앱 설치

저장소 내 `apk`파일을 사용하여 설치

### 실제 단말기를 통해서 개발하는 경우
 단말기에서 아래의 설정을 확인
 개발자 모드 활성화 > 개발자 옵션 내 디버그 모드 ON > 단말기 PC 연결

> [안드로이드 개발자 옵션 활성화 문서](https://developer.android.com/studio/debug/dev-options)



## 디버깅
아래의 링크 참조

- logcat : 안드로이드 Native 로그 [참고](https://developer.android.com/studio/debug/am-logcat?hl=ko)

- browser : 크롬 개발자 도구 [참고](https://developer.chrome.com/docs/devtools/remote-debugging/webviews/)

## 실습시

[예제용 JSON SERVER 저장소](https://github.com/yb-k/mp-jsonserver)

위 프로젝트 다운로드 후 아래의 커맨드 입력

```bash
npm install

npm run serve
# 5050 port로 서버 시작...
```

API 인터페이스 정보는 위 프로젝트 내에 Postman 프로그램을 통해 import를 통해 확인

이후,
todos.html에서 할일 목록에 대한 기능 구현


## 피드백

- 증상
- 작성한 소스코드
- `browser` 로그 
- `logcat` 로그 (관련 있는 경우)

위 정보를 슬랙을 통해 문제가 발생한 를 메세지로 전달

> 구현 방향 / 구현 가능여부의 확인도 자유롭게 문의


## Webpack 빌드 환경 미사용시

`mcore.min.js`, `mcore.extens.js`, `wnInterface.js`를 `html`파일에서 `script`태그를 통해 적용

## 리액트 적용 가이드

1. 라이브러리 설치

 현재 저장소 내의 `mcore.min.js`, `mcore.extens.js`, `wnInterface.js`를
 
 `public`폴더 내에 `js/morpheus/` 경로로 추가

2. 라이브러리 적용

 `public/index.html` 내에 아래와 같이 태그 추가
```html
<!-- %PUBLIC_PATH%는 적절하게 수정하여 사용할 것 -->
<script src="%PUBLIC_PATH%js/morpheus/mcore.min.js"></script>
```

3. `eslint`를 사용 시

 ` .eslintrc`에 아래와 같이 추가
```json
{
    "globals": {
        "M": "readonly"
    }
}

```

> [eslint config global variables](https://eslint.org/docs/latest/user-guide/configuring/language-options#using-configuration-files-1)

4. (webpack) 빌드된 소스가 선적용 되는 경우

아래와 같이 `scriptLoading` 옵션을 `blocking`으로 설정

```js
new HtmlWebpackPlugin({
  // ..some options
	scriptLoading: 'blocking',
})
```

## HTTP-SERVER

```bash
npm i -g http-server
# 설치완료 후
http-server -p 8080 -C 1 -P http://127.0.0.1:5050
# -P : 프록시 서버 옵션
# -C : 캐시 시간
# -p : 실행할 포트
```


## 자주 쓰는 라이브러리

- `lodash` : 유틸성 함수
- `dayjs` : 날짜 함수 라이브러리
- `sweetalert2` : 이쁜 얼럿
- `axios` : http 통신라이브러리
- `swiper` : 슬라이드 관련
- `pulltorefresh` : 당겨서 새로고침
- `font awesome` : Free Icons
- `네이버 나눔 고딕` : 글씨체 폰트 사용시 권장

## 기타

1. 네비게이터는 상단 또는 사이드 슬라이드로 처리를 권장