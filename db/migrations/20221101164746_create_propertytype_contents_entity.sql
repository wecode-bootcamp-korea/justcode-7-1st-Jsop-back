-- migrate:up

-- 클렌저
INSERT INTO
  property_type_contents(content)
VALUES
  ("피부 타입"),
  ("사용감"),
  ("주요 성분"),
  ("향"),
  ("효과"),  -- 5
  ("헤어 타입"),
  ("두피 타입"),
  ("대상"),
  ("크기 및 연소 시간"),
  ("어울리는 대상"), -- 10
  ("주요 참여자"),
  ("아로마");


-- migrate:down
SET foreign_key_checks = 0;
TRUNCATE TABLE property_type_contents;
SET foreign_key_checks = 1;
