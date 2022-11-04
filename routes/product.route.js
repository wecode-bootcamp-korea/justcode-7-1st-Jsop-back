const express = require('express');
const productCtl = require('../controllers/product.controller');
const {asyncWrap} = require('../utils/myutils');

const router = express.Router();

router.get('/test', asyncWrap(productCtl.test));

/*
  {
    "title": "레저렉션 아로마틱 핸드 밤",
    "img_url": "test.png",
    "description": "지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 핸드 밤",
    "price": [["75 mL", 10000], ["120 mL", 13000], ["500 mL", 40000]],
    "category" : {
        "level_1_category": "바디 & 핸드",
        "level_2_category": "핸드"
    },
    "properties" : [
      {"type": "사용감", "values": ["부드러운", "유분기 없는"]},
      {"type": "향", "values": ["시트러스", "우드", "허브"]}
    ]
  }
*/
router.post('/', asyncWrap(productCtl.createProduct));

module.exports = router;
