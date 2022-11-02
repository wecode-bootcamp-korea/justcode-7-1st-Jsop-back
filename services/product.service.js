const itemDao = require('../models/product.dao');

async function test() {
  const result = await itemDao.findPropertyType("사용감");
  console.log(`result :`, result);
}

async function createProduct(product) {
  const { category, price, properties } = product;
  const { level_1_category, level_2_category } = category;

  // 카테고리가 db에 있는 지 확인
  const category_1 = await itemDao.findCategory(1, level_1_category);
  const category_2 = await itemDao.findCategory(2, level_2_category);
  if (!category_1 || !category_2) {
    throw {code: 400, message: "작성한 카테고리가 존재하지 않습니다."}
  }
  const item = await itemDao.createProduct({...product, category_2});
  console.log(`item :`, item);

  // 사이즈 관련 테이블 삽입
  price.forEach(async element => {
    const size = element[0];
    const price = element[1];
    // 사이즈 테이블 삽입
    await itemDao.createSize(size);
    // 사이즈 테이블 찾기
    const [sizeEntity] = await itemDao.findSize(size);
    // 사이즈-가격 테이블 삽입
    await itemDao.createSizePrice(item.insertId, sizeEntity.id, price);
  });

  properties.forEach(async property => {
    const {type, values} = property;
    const propertyTypeContent = await itemDao.findPropertyType(type);
    if (!propertyTypeContent) {
      throw {code: 400, message: "적합하지 않은 속성타입입니다"}
    }
    const contentTypeId = propertyTypeContent.id;
    values.forEach(async value => {
      // 프로퍼티 타입 추가
      await itemDao.createProperty(contentTypeId, value);
      // 프로퍼티 타입 찾기
      const propertyEntity = await itemDao.findPropety(value);
      // item_property 테이블에 추가
      await itemDao.createItemProperty(item.insertId, propertyEntity.id);
    });
  });

  // 속성 테이블 가져오기

  return item;
}

module.exports = { test, createProduct };
