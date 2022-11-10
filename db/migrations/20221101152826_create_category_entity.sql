
-- migrate:up
-- 1차 테이블 ROW 작성
INSERT INTO
  1_level_category(content)
VALUES
  ("스킨 케어"),
  ("바디 & 핸드"),
  ("헤어"),
  ("향수"),
  ("홈"),
  ("키트 & 여행 제품");

-- 스킨케어 2차 카테고리 삽입
INSERT INTO
  `2_level_category`(`1_level_category_id`, content)
VALUES
  (1, "클렌저"),
  (1, "각질 제거"),
  (1, "트리트먼트 & 마스크"),
  (1, "토너"),
  (1, "하이드레이터"),
  (1, "립 & 아이"),
  (1, "쉐이빙"),
  (1, "선케어"),
  (1, "키트");

-- 2차 카테고리 삽입
  -- 스킨 케어
INSERT INTO
  `2_level_category`(`1_level_category_id`, content)
VALUES
  (2, "핸드"),
  (2, "바디"),
  (2, "퍼스널 케어"),
  (2, "번들");

  -- 헤어
INSERT INTO
  `2_level_category`(`1_level_category_id`, content)
VALUES
  (3, "샴푸"),
  (3, "컨디셔너"),
  (3, "트리트먼트"),
  (3, "그루밍");

  -- 향수
INSERT INTO
  `2_level_category`(`1_level_category_id`, content)
VALUES
  (4, "이더시스"),
  (4, "미라세티"),
  (4, "카르스트"),
  (4, "에레미아");

  -- 홈
INSERT INTO
  `2_level_category`(`1_level_category_id`, content)
VALUES
  (5, "홈"),
  (5, "문학"),
  (5, "홈 케어 기프트");

  -- 키트 여행 제품
INSERT INTO
  `2_level_category`(`1_level_category_id`, content)
VALUES
  (6, "시즈널 기프트 키트"),
  (6, "스킨케어 키트"),
  (6, "바디 & 핸드 케어 키트"),
  (6, "여행");

-- migrate:down
SET foreign_key_checks = 0;
TRUNCATE TABLE `2_level_category`;
TRUNCATE TABLE `1_level_category`;
SET foreign_key_checks = 1;

