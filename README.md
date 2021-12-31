# CryptoCola Client

A Quasar Framework app
여기서 Backtest UI 와 dbcola UI를 Quasra 버전으로 테스트 작업한다.
## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## 추가사항
ApexChart 설치
Vue Draggable 설치 예정

## 깨달음
### 대발견 https://tvjs.io/
TradingView 유사한 기능의 stock chart 전문 component
도대체 세상엔 머리좋은 친구들이 너무 많아 
집에서 이거나 해야지

### apexChart 로딩시 계속
문제는 quasar에서 내재된 vue 버전이 3.2.x 임 
그래서 3.x버전의 ApexChart 를 npm install vue3-apexcharts 를 설치하여 문제 해결
```
npm install vue3-apexcharts
npm install apexcharts
```

https://github.com/patrickmonteiro/quasar-apexcharts


### vuedraggable 로딩 오류
vue 3.x 버전의 경우 아래의 vue draggable의 경우 아래의 버전으로 install 하여 사용한다. 
https://github.com/SortableJS/vue.draggable.next

### dbcola/index.html  sortable 기능이 되지않은이유
sortable 이란 자체 내 container에서의drag drop으로 순서의 변경처리
dragrable의 list 속성을 computed 의 comluns()로 한 경우 read는 되지만 write가 되지 않으므로 
sortable이 됮지않은 현상이 발생함 

### dbcola/2   페이지의 사항
data() 대신에 setup() 으로 변경함 
이렇게하면 sortable이 되지 않음. 이것도 변수가 readonly 의 형식으로 진행한다.

