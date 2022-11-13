# node-project
.
├── controllers
├── db
│   ├── erd
│   └── migrations
├── middlewares
├── models
├── public
├── routes
├── services
├── tests
└── utils

- 폴더별 목적: ex) <사용목적> (<폴더>)
  - Layered Pattern 적용 (controller, models, routes, services)
  - db 버전 관리 (db)
  - 테스트 (tests)
  - 공통 기능 모음 (utils, middleware)
  - 이미지 등의 binary 공유 (public)
