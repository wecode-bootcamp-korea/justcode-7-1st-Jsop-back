// tests/user.test.js
const items = require('./bulkItem');
// npm i --save-dev supertest

// request를 보낼 수 있도록.
const request = require('supertest');

// backend server
const { createApp } = require('../app');
// db server
const database = require('../models/database');
const { describe } = require('pm2');



// - DB 연결
  const app = createApp();

  beforeAll(async () => {
    await database.initialize();
  });

// TEST 목적 : 우리가 app에 생성해서, 등록시킨 API가 정상적으로 동작하는가.
// TEST 목적 : client (frontend)가 이 기능을 정상적으로 실행시킬 수 있는가.

// 1. DB에 상품 생성 기능 정상 동작하는지 테스트
// - test name 명시 (create product)


  test('SUCCESS: create product', async() => {
  // - 데이터를 입력하는 API 호출
    await request(app)
      .post('/products')
      .send({
        title: '리무브',
        img_url: '1.png',
        description: 'desc 1',
        price: [['60 mL', 27000]],
        category: {  
          level_1_category: '스킨 케어',
          level_2_category: '클렌저',
        },
        properties: [
        { type: '피부 타입', values: ['모든 피부', '메이크업을 한 피부'] },
        { type: '사용감', values: ['진정된', '생기있는'] },
        { type: '주요 성분', values: [ '그레이프 씨드', '토코페롤', '마트리카리아꽃오일(블루 카모마일)', ], },
        ]
      })
  // - 제대로 동작하는지 확인
      .expect(201)
      .expect({message: 'created product'})
  })
  test('FAIL: create product - no title', async() => {
    await request(app)
    .post('/products')
      .send({
        // title: '리무브',
        img_url: '1.png',
        description: 'desc 1',
        price: [['60 mL', 27000]],
        category: {  
          level_1_category: '스킨 케어',
          level_2_category: '클렌저',
        },
        properties: [
        { type: '피부 타입', values: ['모든 피부', '메이크업을 한 피부'] },
        { type: '사용감', values: ['진정된', '생기있는'] },
        { type: '주요 성분', values: [ '그레이프 씨드', '토코페롤', '마트리카리아꽃오일(블루 카모마일)', ], },
        ]
      })
    .expect(400)
    .expect({message: 'plz fill title'})
  })
  test('FAIL: create product - no category', async() => {
    await request(app)
    .post('/products')
    .send({
      title: '리무브',
      img_url: '1.png',
      description: 'desc 1',
      price: [['60 mL', 27000]],
      properties: [
        { type: '피부 타입', values: ['모든 피부', '메이크업을 한 피부'] },
        { type: '사용감', values: ['진정된', '생기있는'] },
        { type: '주요 성분', values: [ '그레이프 씨드', '토코페롤', '마트리카리아꽃오일(블루 카모마일)', ], },
    ]
    })
    .expect(400)
    .expect({message: 'plz fill category'})
  })

// // 2. DB에 기존에 있는 데이터 잘 불러오는지 테스트

// // 정해진 데이터만 미리 넣고, 정해진 데이터만 걸러내서 - test data


  beforeAll(async() => {
    // test data
    await database.query(`
      INSERT INTO item (id, title, img_url, description, 2_level_category_id)
      VALUES (
        1,
        'test item 1',
        'http://test url',
        'test description',
        1
      )`
    );
  
    await database.query(`
      INSERT INTO size (id, size)
      VALUES (1, '60mL')
    `)
  
    await database.query(`
      INSERT INTO item_size_price (id, item_id, size_id, price)
      VALUES (1, 1, 1, 10000)
    `)
  
    await database.query(`
      INSERT INTO properties (id, property_type_contents_id, content)
      VALUES (1, 1, 'hi')
      `
    )
  
    await database.query(`
      INSERT INTO item_properties (id, item_id, properties_id)
      VALUES (1, 1, 1)
      `
    )
  
  })
  
  afterEach(async () => {
    await database.query(`
      SET foreign_key_checks = 0;
    `)
  
    // await database.query(`
    //   TRUNCATE item_properties;
    // `)
  
    // await database.query(`
    //   TRUNCATE properties;
    // `)
    await database.query(`
      TRUNCATE users_address;
    `)
  
    await database.query(`
      TRUNCATE cart_item;
    `)
  
    await database.query(`
      TRUNCATE users;
    `)
  
    await database.query(`
      TRUNCATE item_size_price;
    `)
  
    // await database.query(`
    //   TRUNCATE size;
    // `)
  
    await database.query(`
      TRUNCATE item;
    `)
  })

  test('SUCCESS: get products - all product', async () => {
    await request(app)
    .get('/products')
    .expect(200) // response status code
    .expect([{
      "id":1,
      "title":"test item 1",
      "img_url":"http://test url",
      "description":"test description",
      "price":[["60mL",10000,1]],
      "category":{
        "level_1_category":"스킨 케어",
        "level_2_category":"클렌저"
      },
      "properties":[{
        "types":"피부 타입",
        "values":["hi"]
      }]
    }]) // response body
  })
