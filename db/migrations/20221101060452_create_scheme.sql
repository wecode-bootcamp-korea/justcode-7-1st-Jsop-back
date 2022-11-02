-- migrate:up
CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL COMMENT '이메일',
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL COMMENT '성',
  `last_name` varchar(255) NOT NULL COMMENT '이름',
  `created_at` timestamp default CURRENT_TIMESTAMP NOT NULL COMMENT '생성 날짜'
);

CREATE TABLE `users_address` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `users_id` integer,
  `address` varchar(255) NOT NULL
);

CREATE TABLE `item` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(50) NOT NULL COMMENT '제품 이름',
  `img_url` varchar(255) NOT NULL COMMENT '제품 이미지',
  `description` TEXT NOT NULL COMMENT '제품 설명',
  `2_level_category_id` integer COMMENT '카테고리 ID'
);

CREATE TABLE `item_size_price` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `item_id` integer COMMENT '상품 ID',
  `size_id` integer NOT NULL COMMENT 'ex) 50ml, 100ml',
  `price` decimal NOT NULL COMMENT '상품의 사이즈 별 가격'
);

CREATE TABLE `cart_item` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `users_id` integer COMMENT '카트 주인',
  `item_size_id` integer COMMENT '담은 아이템',
  `quantity` integer NOT NULL COMMENT '담은 수량'
);

CREATE TABLE `1_level_category` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(50) UNIQUE NOT NULL COMMENT 'ex) 스킨케어, 바디&핸드, 향수'
);

CREATE TABLE `2_level_category` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `1_level_category_id` integer,
  `content` varchar(50) UNIQUE NOT NULL COMMENT 'ex) 클렌저, 각질 제거, 트리트먼트 & 마스크, 토너'
);

CREATE TABLE `property_types` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `2_level_id` integer NOT NULL,
  `property_type_contents_id` integer NOT NULL
);

CREATE TABLE `property_type_contents` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(50) UNIQUE NOT NULL COMMENT 'ex) 피부타입, 사용감, 주요성분'
);

CREATE TABLE `properties` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `property_type_contents_id` integer,
  `content` varchar(50) NOT NULL COMMENT 'ex) 모든 피부, 메이크업을 한 피부, 진정된, 생기있는'
);

CREATE TABLE `order` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `order_number` varchar(150) UNIQUE NOT NULL,
  `total_price` decimal NOT NULL,
  `users_id` integer COMMENT '주문자 ID',
  `address` varchar(150) COMMENT '주문 주소'
);

CREATE TABLE `size` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `size` varchar(50) UNIQUE NOT NULL COMMENT '100ml, 150ml'
);

CREATE TABLE `item_properties` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `item_id` integer,
  `properties_id` integer COMMENT '주문자 ID'
);

CREATE TABLE `order_item` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `order_id` integer,
  `item_size_id` integer,
  `quantity` integer NOT NULL
);

CREATE UNIQUE INDEX `item_size_price_index_0` ON `item_size_price` (`item_id`, `size_id`);

CREATE UNIQUE INDEX `property_types_index_1` ON `property_types` (`2_level_id`, `property_type_contents_id`);

CREATE UNIQUE INDEX `properties_index_2` ON `properties` (`property_type_contents_id`, `content`);

ALTER TABLE `users_address` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `item` ADD FOREIGN KEY (`2_level_category_id`) REFERENCES `2_level_category` (`id`);

ALTER TABLE `item_size_price` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `item_size_price` ADD FOREIGN KEY (`size_id`) REFERENCES `size` (`id`);

ALTER TABLE `cart_item` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `cart_item` ADD FOREIGN KEY (`item_size_id`) REFERENCES `item_size_price` (`id`);

ALTER TABLE `2_level_category` ADD FOREIGN KEY (`1_level_category_id`) REFERENCES `1_level_category` (`id`);

ALTER TABLE `property_types` ADD FOREIGN KEY (`2_level_id`) REFERENCES `2_level_category` (`id`);

ALTER TABLE `property_types` ADD FOREIGN KEY (`property_type_contents_id`) REFERENCES `property_type_contents` (`id`);

ALTER TABLE `properties` ADD FOREIGN KEY (`property_type_contents_id`) REFERENCES `property_type_contents` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `item_properties` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `item_properties` ADD FOREIGN KEY (`properties_id`) REFERENCES `properties` (`id`);

ALTER TABLE `order_item` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `order_item` ADD FOREIGN KEY (`item_size_id`) REFERENCES `item_size_price` (`id`);

-- migrate:down
SET foreign_key_checks = 0;
DROP TABLE `users`;
DROP TABLE `users_address`;
DROP TABLE `item`;
DROP TABLE `item_size_price`;
DROP TABLE `cart_item`;
DROP TABLE `1_level_category`;
DROP TABLE `2_level_category`;
DROP TABLE `property_types`;
DROP TABLE `property_type_contents`;
DROP TABLE `properties`;
DROP TABLE `order`;
DROP TABLE `size`;
DROP TABLE `item_properties`;
DROP TABLE `order_item`;
SET foreign_key_checks = 1;