-- migrate:up

-- 클렌저
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (1, 1), -- (클렌저, 피부타입)
  (1, 2), -- (클렌저, 사용감)
  (1, 3); -- (클렌저, 주요 성분)

-- 각질 제거
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (2, 1),
  (2, 2),
  (2, 3);

  -- 트리트먼트 & 마스크
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (3, 1),
  (3, 2),
  (3, 3);

  -- 토너
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (4, 1),
  (4, 2),
  (4, 3);

  -- 핸드
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (10, 2),
  (10, 4),
  (10, 3);

  -- 바디
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (11, 2),
  (11, 4),
  (11, 3);

  -- 퍼스널 케어
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (12, 4),
  (12, 5),
  (12, 3);

  -- 샴푸
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (14, 6),
  (14, 4),
  (14, 3);

  -- 컨디셔너
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (15, 6),
  (15, 4),
  (15, 3);

  -- 트리트먼트
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (16, 7),
  (16, 4),
  (16, 3);

  -- 그루밍
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (17, 7),
  (17, 4),
  (17, 3);

  -- 이더시스
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (18, 4),
  (18, 8),
  (18, 3);

  -- 미라세티
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (19, 4),
  (19, 8),
  (19, 3);

  -- 카르스트
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (20, 4),
  (20, 8),
  (20, 3);

  -- 에레미아
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (21, 4),
  (21, 8),
  (21, 3);

  -- 홈
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (22, 4),
  (22, 9),
  (22, 3);

  -- 문학
INSERT INTO
  property_types(2_level_id, property_type_contents_id)
VALUES
  (23, 10),
  (23, 11);

-- migrate:down

SET foreign_key_checks = 0;
TRUNCATE TABLE property_types;
SET foreign_key_checks = 1;
