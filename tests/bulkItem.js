const items = [
  {
    title: '리무브',
    img_url:
      'https://www.aesop.com/medias/Aesop-Skin-Remove-60mL-large.png?context=bWFzdGVyfGltYWdlc3wzNTg0NDJ8aW1hZ2UvcG5nfGltYWdlcy9oMTIvaDQxLzg4MDUwNzIxNDIzNjYucG5nfDM2ODViMzA0ZWU1NGU0MzBkOGZjMGZlNjlhMTU2YjE2ZTQ0ZTY2NjY5MjBhZDRiN2NhNDU4NzgyYmE2NGNkMGE',
    description:
      '눈 주위의 민감한 피부를 달래고 진정시켜주는 마트리카리아가 포함된 부드러운 오일 제형의 아이 메이크업 리무브',
    price: [['60 mL', 27000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '클렌저',
    },
    properties: [
      { type: '피부 타입', values: ['모든 피부', '메이크업을 한 피부'] },
      { type: '사용감', values: ['진정된', '생기있는'] },
      {
        type: '주요 성분',
        values: [
          '그레이프 씨드',
          '토코페롤',
          '마트리카리아꽃오일(블루 카모마일)',
        ],
      },
    ],
  },
  {
    title: '파슬리 씨드 페이셜 클렌징 오일',
    img_url:
      'https://www.aesop.com/u1nb1km7t5q7/73DOrUUuPavrbJWFhSL2KW/d56da9fd45b0318682c3c04b8d38f066/Aesop_Kits_Gift_Kits_2021-22_Congruous_Web_Large_1584x962px.png',
    description:
      '진한 메이크업도 부드럽고 깨끗하게 닦아주는 오일 타입의 클렌저',
    price: [['200 mL', 65000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '클렌저',
    },
    properties: [
      { type: '피부 타입', values: ['중성', '복합성', '건성', '민감성'] },
      { type: '사용감', values: ['부드러운', '진정된'] },
      {
        type: '주요 성분',
        values: ['마카다미아 씨', '토코페롤', '베타 카로틴'],
      },
    ],
  },
  {
    title: '퓨리파잉 페이셜 크림 클렌저',
    img_url: 'test.png',
    description:
      '가벼운 메이크업을 지워주고, 피부에 남은 잔여물을 말끔하게 씻어내어 피부를 부드럽고 촉촉하게 가꿔 주는 크림 클렌저',
    price: [['100 mL', 40000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '클렌저',
    },
    properties: [
      { type: '피부 타입', values: ['중성', '건성'] },
      { type: '사용감', values: ['탄력', '유연', '부드러운'] },
      { type: '주요 성분', values: ['라벤더', '화이트 클레이', '카모마일'] },
    ],
  },
  {
    title: '페뷸러스 페이스 클렌저',
    img_url: 'test.png',
    description:
      '진한 메이크업도 부드럽고 깨끗하게 닦아주는 오일 타입의 클렌저',
    price: [
      ['100 mL', 35000],
      ['200 mL', 55000],
    ],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '클렌저',
    },
    properties: [
      { type: '피부 타입', values: ['중성', '건성'] },
      { type: '사용감', values: ['상쾌한', '진정된', '부드러운'] },
      {
        type: '주요 성분',
        values: ['베르가모트 오일', '캐모마일 꽃 오일', '로즈마리잎'],
      },
    ],
  },
  {
    title: '파슬리 씨드 페이셜 클렌저',
    img_url: 'test.png',
    description: '피부를 건조하지 않고, 부드럽게 세정해주는 젤 클렌저',
    price: [
      ['100 mL', 45000],
      ['200 mL', 69000],
    ],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '클렌저',
    },
    properties: [
      { type: '피부 타입', values: ['중성', '복합성', '문제성'] },
      { type: '사용감', values: ['부드러운', '매끄러운'] },
      {
        type: '주요 성분',
        values: [
          '스페인감초뿌리추출물',
          '락틱애씨드',
          '양까막까치밥나무씨오일',
        ],
      },
    ],
  },
  {
    title: '어메이징 페이스 클렌저',
    img_url: 'test.png',
    description:
      '부드러운 거품이 피부를 효과적으로 세정하고 피부의 균형을 잡아주는 데일리 클렌저',
    price: [
      ['100 mL', 35000],
      ['200 mL', 55000],
    ],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '클렌저',
    },
    properties: [
      {
        type: '피부 타입',
        values: ['지성', '복합성', '덥고 습한 날씨의 피부'],
      },
      { type: '사용감', values: ['산뜻한', '매끄러운'] },
      { type: '주요 성분', values: ['만다린', '일랑일랑', '라벤더'] },
    ],
  },
  {
    title: '퓨리파잉 페이셜 엑스폴리언트 페이스트',
    img_url: 'test.png',
    description:
      '각질을 관리해주면서 피부를 매끄럽게 클렌징 해주는 크림 베이스 클렌저',
    price: [['75 mL', 62000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '각질 제거',
    },
    properties: [
      {
        type: '피부 타입',
        values: ['중성', '건성', '민감성', '여행이 잦거나', '추운 날씨의 피부'],
      },
      { type: '사용감', values: ['산뜻한', '부드러운', '깔끔한'] },
      { type: '주요 성분', values: ['석영', '로즈마리 리프', '락틱애씨드'] },
    ],
  },
  {
    title: '티 트리 리프 페이셜 엑스폴리언트',
    img_url: 'test.png',
    description:
      '티 트리 리프, 너트 쉘, 클레이를 함유한 파우더 타입의 각질 관리제',
    price: [['30 mL', 43000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '각질 제거',
    },
    properties: [
      { type: '피부 타입', values: ['중성', '복합성', '지성'] },
      { type: '사용감', values: ['상쾌한', '부드러운', '진정된'] },
      { type: '주요 성분', values: ['알로에 베라', '월넛 쉘', '티 트리 리프'] },
    ],
  },
  {
    title: '파슬리 씨드 클렌징 마스크',
    img_url: 'test.png',
    description:
      '파슬리 씨드와 로즈힙 열매오일 추출물이 함유된 클레이 베이스의 딥 클렌징 마스크로 피부의 잔여물을 효과적으로 세정하며 피부의 수분감을 유지시켜줍니다.',
    price: [['60 mL', 55000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '트리트먼트 & 마스크',
    },
    properties: [
      { type: '피부 타입', values: ['대부분의 피부 타입', '건성'] },
      { type: '사용감', values: ['매끄러운', '부드러운'] },
      {
        type: '주요 성분',
        values: [
          '파슬리 씨드(화이트 크레이)',
          '이브닝 프림로즈쉘',
          '로즈힙 열매오일',
        ],
      },
    ],
  },
  {
    title: '프림로즈 페이셜 클렌징 마스크',
    img_url: 'test.png',
    description:
      '식물성 오일이 피부에 영양분을 공급하는 동시에, 잔여물을 깨끗이 씻어내어 상쾌함을 더하는 클레이 타입의 클렌징 마스크',
    price: [
      ['60 mL', 43000],
      ['120 mL', 65000],
    ],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '트리트먼트 & 마스크',
    },
    properties: [
      {
        type: '피부 타입',
        values: ['중성', '건성', '지성', '복합성', '문제성 피부'],
      },
      { type: '사용감', values: ['매끄럽고 깊은 세정'] },
      {
        type: '주요 성분',
        values: [
          '포도 씨(로즈 힙)',
          '판테놀(프림로즈)',
          '파슬리 씨앗(실비아오일)',
        ],
      },
    ],
  },
  {
    title: '컨트롤',
    img_url: 'test.png',
    description: '문제성 피부를 효과적으로 진정시켜주는 순한 스팟 트리트먼트',
    price: [['9 mL', 27000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '트리트먼트 & 마스크',
    },
    properties: [
      { type: '피부 타입', values: ['문제성 피부'] },
      { type: '사용감', values: ['진정', '쿨링', '투명한 마무리'] },
      {
        type: '주요 성분',
        values: [
          '파나이아신아마이드',
          '소듐 아스코빌 포스페이트',
          '살리실릭애씨드',
        ],
      },
    ],
  },
  {
    title: '카모마일 컨센트레이트 안티 블레미쉬 마스크',
    img_url: 'test.png',
    description:
      '건조함 없이 모공까지 깨끗하게 세정해주며, 자극이 적고 효과적으로 피부를 진정시켜주어 문제성 피부 관리에도 적합한 딥 클렌징 마스크',
    price: [['60 mL', 53000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '트리트먼트 & 마스크',
    },
    properties: [
      { type: '피부 타입', values: ['문제성 피부'] },
      { type: '사용감', values: ['맑고 깨끗한', '진정된'] },
      {
        type: '주요 성분',
        values: ['카모마일', '티 트리 리프', '이브닝 프림로즈'],
      },
    ],
  },
  {
    title: '페뷸러스 페이스 오일',
    img_url: 'test.png',
    description:
      '정화 작용의 식물 추출물이 들어있어 혼잡한 피부를 정리하고 밸런스를 잡아주는 페이셜 오일',
    price: [['25 mL', 67000]],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '트리트먼트 & 마스크',
    },
    properties: [
      { type: '피부 타입', values: ['중성', '복합성', '윤기없는 피부'] },
      { type: '사용감', values: ['균형잡힌', '산뜻한', '유분기 없는'] },
      { type: '주요 성분', values: ['두송열매오일', '일랑일랑', '자스민'] },
    ],
  },
  {
    title: '파슬리 씨드 안티 옥시던트 페이셜 토너',
    img_url: 'test.png',
    description: '피부 진정과 수분 공급을 위한 부드러운 토너',
    price: [
      ['100 mL', 47000],
      ['200 mL', 73000],
    ],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '토너',
    },
    properties: [
      { type: '피부 타입', values: ['모든 피부'] },
      { type: '사용감', values: ['진정된', '부드러운', '가벼운'] },
      {
        type: '주요 성분',
        values: ['파슬리 씨드', '라벤더', '마트리카리아꽃오일'],
      },
    ],
  },
  {
    title: '비터 오렌지 아스트린젠트 토너',
    img_url: 'test.png',
    description: '우수한 세정력을 지닌 시트러스 기반의 토너',
    price: [
      ['100 mL', 39000],
      ['200 mL', 63000],
    ],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '토너',
    },
    properties: [
      {
        type: '피부 타입',
        values: ['대부분의 피부 타입', '지성', '문제성 피부'],
      },
      { type: '사용감', values: ['시원한', '깨끗한', '매트한 마무리'] },
      {
        type: '주요 성분',
        values: ['비터 오렌지', '위치 헤이즐', '로즈마리 리프'],
      },
    ],
  },
  {
    title: '비 앤 티 밸런싱 토너',
    img_url: 'test.png',
    description:
      '프로비타민 B5가 함유하여 피부의 밸런스를 잡아주는 수렴성 토너',
    price: [
      ['100 mL', 39000],
      ['200 mL', 63000],
    ],
    category: {
      level_1_category: '스킨 케어',
      level_2_category: '토너',
    },
    properties: [
      { type: '피부 타입', values: ['모든 피부 타입'] },
      {
        type: '사용감',
        values: ['균형감', '상쾌함', '수분 공급', '가벼운 마무리'],
      },
      { type: '주요 성분', values: ['소듐 글루코네이트', '판테놀', '그린티'] },
    ],
  },
  {
    title: '레저렉션 아로마틱 핸드 워시',
    img_url: 'test.png',
    description: '오렌지, 로즈마리, 라벤더 오일을 함유한 부드러운 핸드 워시',
    price: [
      ['500 mL (펌프 미포함)', 46000],
      ['500 mL (펌프 포함)', 47000],
    ],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '핸드',
    },
    properties: [
      { type: '사용감', values: ['깔끔한', '상쾌함'] },
      { type: '향', values: ['시트러스', '우드', '허브'] },
      {
        type: '주요 성분',
        values: ['만다린', '로즈마리 리프', '시더우드 아틀라스'],
      },
    ],
  },
  {
    title: '레버런스 아로마틱 핸드 워시',
    img_url: 'test.png',
    description:
      '고운 퓨마이스가 함유되어 손의 각질을 깨끗이 씻어주고 보태니컬 추출물 블렌드로 상쾌함을 주는 핸드 워시',
    price: [
      ['500 mL (펌프 미포함)', 46000],
      ['500 mL (펌프 포함)', 47000],
    ],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '핸드',
    },
    properties: [
      { type: '사용감', values: ['깔끔한', '매끄러운', '부드러운'] },
      { type: '향', values: ['흙내음', '우드', '스모키'] },
      {
        type: '주요 성분',
        values: ['베티버뿌리오일', '비터오렌지잎/잔가지오일', '베르가모트오일'],
      },
    ],
  },
  {
    title: '레저렉션 아로마틱 핸드 밤',
    img_url: 'test.png',
    description:
      '지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 핸드 밤',
    price: [
      ['75 mL', 31000],
      ['120 mL', 45000],
      ['500 mL', 120000],
    ],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '핸드',
    },
    properties: [
      { type: '사용감', values: ['유분기 없는', '부드러운'] },
      { type: '향', values: ['시트러스', '우드', '허브'] },
      {
        type: '주요 성분',
        values: ['만다린', '로즈마리 리프', '시더우드 아틀라스'],
      },
    ],
  },
  {
    title: '에이 로즈 바이 애니 아더 네임 바디 클렌저',
    img_url: 'test.png',
    description:
      '우수한 품질의 다마스크장미꽃오일과 피부를 부드럽게 가꿔주는 식물성 추출물을 함유해 부드러우면서 꼼꼼한 세정을 전하는 향기로운 클렌징 젤',
    price: [
      ['100 mL', 20000],
      ['500mL (펌프 미포함)', 55000],
      ['500 mL', 56000],
    ],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '바디',
    },
    properties: [
      { type: '사용감', values: ['따뜻함', '깨끗함', '상쾌한'] },
      { type: '향', values: ['플로랄', '스파이시', '따뜻함'] },
      { type: '주요 성분', values: ['로즈', '카다멈', '블랙 페퍼'] },
    ],
  },
  {
    title: '브레스리스',
    img_url: 'test.png',
    description:
      '부드러움과 영양을 공급하는 넛트 오일 추출물과 풍부한 비타민 E성분을 함유한 바디 오일',
    price: [['100 mL', 39000]],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '바디',
    },
    properties: [
      { type: '사용감', values: ['집중 수분 공급', '부드러움'] },
      { type: '향', values: ['우디', '가벼운', '시트러스향'] },
      { type: '주요 성분', values: ['오렌지', '호호바 씨드', '로렐 리프'] },
    ],
  },
  {
    title: '코리안더 씨드 바디 클렌저',
    img_url: 'test.png',
    description:
      '피부 세정과 독특하고 따뜻한 풍성한 아로마로 기분을 북돋아주는 거품이 적은 클렌징 젤',
    price: [
      ['100 mL', 20000],
      ['500mL (펌프 미포함)', 55000],
      ['500 mL', 56000],
    ],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '바디',
    },
    properties: [
      { type: '사용감', values: ['생기있는', '따뜻함', '깨끗함'] },
      { type: '향', values: ['우디', '스파이시', '따뜻한 향'] },
      { type: '주요 성분', values: ['코리안더 씨드', '블랙 페퍼', '파촐리'] },
    ],
  },
  {
    title: '제라늄 리프 바디 밤',
    img_url: 'test.png',
    description:
      '영양이 풍부한 넛트 오일, 피부를 부드럽게 해주는 센티드제라늄추출물, 향기로운 시트러스 추출물을 함유한 바디 밤',
    price: [
      ['100 mL', 39000],
      ['500 mL', 120000],
    ],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '바디',
    },
    properties: [
      { type: '사용감', values: ['탄력', '부드러움', '촉촉함'] },
      { type: '향', values: ['그린', '시트러스', '상쾌함'] },
      { type: '주요 성분', values: ['제라늄 리프', '만다린', '베르가못'] },
    ],
  },
  {
    title: '데오도란트',
    img_url: 'test.png',
    description:
      '징크리시놀리에이트 및 상쾌한 에센셜 오일 블렌드가 함유된 스프레이 타입의 남녀 공용 데오도란트',
    price: [['50 mL', 37000]],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '퍼스널 케어',
    },
    properties: [
      { type: '향', values: ['그린', '시트러스', '상쾌함'] },
      {
        type: '효과',
        values: ['편리하고 가벼운 스프레이로 겨드랑이 냄새를 완화해줍니다'],
      },
      { type: '주요 성분', values: ['제라늄 리프', '만다린', '베르가못'] },
    ],
  },
  {
    title: '허벌 데오도란트',
    img_url: 'test.png',
    description:
      '징크리시놀리에이트와 피부를 편안하게 해주는 에센셜 오일이 함유된 스프레이 타입의 데오도란트',
    price: [['50 mL', 37000]],
    category: {
      level_1_category: '바디 & 핸드',
      level_2_category: '퍼스널 케어',
    },
    properties: [
      { type: '향', values: ['허브향', '캠포릭', '상쾌함'] },
      {
        type: '효과',
        values: ['편리하고 가벼운 스프레이로 겨드랑이 냄새를 완화해줍니다'],
      },
      {
        type: '주요 성분',
        values: ['살비아 오일', '징크리시놀리에이트', '버지니아풍년화수'],
      },
    ],
  },
  {
    title: '샴푸',
    img_url: 'test.png',
    description:
      '프랑킨센스, 판테놀 등 뛰어난 성분을 함유하여 모발과 두피를 깨끗하게 세정하며 부드럽고 윤기나는 머릿결과 향기로운 모발을 선사하는 샴푸',
    price: [
      ['100 mL', 20000],
      ['500mL (펌프 미포함)', 54000],
      ['500 mL', 55000],
    ],
    category: {
      level_1_category: '헤어',
      level_2_category: '샴푸',
    },
    properties: [
      {
        type: '헤어 타입',
        values: ['가는 모발', '중간 모발', '거친 모발', '건조한 모발'],
      },
      { type: '향', values: ['시트러스', '흙내음', '우디'] },
      {
        type: '주요 성분',
        values: ['베르가못 라인드', '프랑킨센스', '시더 아틀라스'],
      },
    ],
  },
  {
    title: '볼류마이징 샴푸',
    img_url: 'test.png',
    description:
      '폴리쿼터늄-67이 모근 사이의 모발을 분리해 모발이 힘있고 풍성해지도록 도와주는 볼륨 샴푸',
    price: [['500 mL', 55000]],
    category: {
      level_1_category: '헤어',
      level_2_category: '샴푸',
    },
    properties: [
      { type: '헤어 타입', values: ['얇은 모발', '힘없는 모발'] },
      { type: '향', values: ['민트', '허브'] },
      {
        type: '주요 성분',
        values: ['회향유', '페퍼민트 리프', '로즈마리 리프'],
      },
    ],
  },
  {
    title: '컨디셔너',
    img_url: 'test.png',
    description:
      '아미노산을 풍부하게 함유하여 연약하고 가는 모발과 염색 모발을 포함한 대부분의 모발 타입을 부드럽고 촉촉하게 가꿔주며 머릿결을 향기롭고 상쾌하게 가꿔주는 영양이 풍부한 컨디셔너',
    price: [
      ['100 mL', 20000],
      ['500mL (펌프 미포함)', 54000],
      ['500 mL', 55000],
    ],
    category: {
      level_1_category: '헤어',
      level_2_category: '컨디셔너',
    },
    properties: [
      {
        type: '헤어 타입',
        values: [
          '가는 모발',
          '연약한 모발',
          '염색 모발을 포함한 다양한 모발 타입',
        ],
      },
      { type: '향', values: ['시트러스', '흙내음', '우디'] },
      {
        type: '주요 성분',
        values: ['베르가못 라인드', '프랑킨센스', '시더 아틀라스'],
      },
    ],
  },
  {
    title: '세이지 앤 시더 스칼프 트리트먼트',
    img_url: 'test.png',
    description:
      '보태니컬 오일과 수분을 공급해주는 식물 추출물이 함유하고 있어 두피를 보호하고 진정시켜주는 오일 트리트먼트',
    price: [['25 mL', 41000]],
    category: {
      level_1_category: '헤어',
      level_2_category: '트리트먼트',
    },
    properties: [
      { type: '두피 타입', values: ['건조한', '가려운', '각질이 있는 두피'] },
      { type: '향', values: ['허브', '우디'] },
      { type: '주요 성분', values: ['로즈마리 리프', '시더우드', '회향유'] },
    ],
  },
  {
    title: '이더시스 오 드 퍼퓸',
    img_url: 'test.png',
    description:
      '밝은 오프닝 노트로 시작해 깊은 스파이스, 풍부한 흙내음, 건조한 우디 노트로 이어지는 묘한 매력의 향수',
    price: [['50 mL', 210000]],
    category: {
      level_1_category: '향수',
      level_2_category: '이더시스',
    },
    properties: [
      { type: '향', values: ['스파이시', '우디'] },
      { type: '대상', values: ['모든 성별', '몽상가', '연못을 바라보는 사람'] },
      { type: '주요 성분', values: ['블랙 페퍼', '프랑킨센스', '샌달우드'] },
    ],
  },
  {
    title: '미라세티 오 드 퍼퓸',
    img_url: 'test.png',
    description:
      '따뜻한 유향 노트의 향수로 바다 내음과 머스크 향이 떠오르는 우디한 흙내음이 페퍼와 허브 노트를 받쳐줍니다',
    price: [['50 mL', 210000]],
    category: {
      level_1_category: '향수',
      level_2_category: '미라세티',
    },
    properties: [
      { type: '향', values: ['유향', '우디', '스파이시'] },
      { type: '대상', values: ['모든 성별', '항해자', '공상가'] },
      { type: '주요 성분', values: ['라다넘', '암브레트', '스타이어랙스'] },
    ],
  },
  {
    title: '카르스트 오 드 퍼퓸',
    img_url: 'test.png',
    description:
      '무디하면서 상쾌한 향수로, 미네랄의 탑 노트와 폭풍우의 메탈릭한 베이스 노트가 어우러져 절벽에서 자란 식물과 해안을 연상시킵니다',
    price: [['50 mL', 210000]],
    category: {
      level_1_category: '향수',
      level_2_category: '카르스트',
    },
    properties: [
      { type: '향', values: ['상쾌한', '허브', '마린'] },
      { type: '대상', values: ['모든 성별', '실용주의자', '실존주의자'] },
      { type: '주요 성분', values: ['주니퍼', '쿠민', '샌달우드'] },
    ],
  },
  {
    title: '에레미아 오 드 퍼퓸',
    img_url: 'test.png',
    description:
      '밝은 시트러스 노트로 시작해 밀랍의 플로럴, 파우더리 머스크, 비 내린 뒤 콘크리트 내음으로 이어지는 활기차고 상쾌한 향수입니다.',
    price: [['50 mL', 210000]],
    category: {
      level_1_category: '향수',
      level_2_category: '에레미아',
    },
    properties: [
      { type: '향', values: ['그린', '플로럴', '시트러스'] },
      { type: '대상', values: ['모든 성별', '철학자', '낭만주의자'] },
      { type: '주요 성분', values: ['갈바눔', '아이리스', '유자'] },
    ],
  },
  {
    title: '프톨레미 아로마틱 캔들',
    img_url: 'test.png',
    description:
      '시더, 사이프러스 그리고 베티버 노트가 어우러져 고대 숲을 연상시키는 아로마 향초. (*안전기준 적합확인 신고번호: CB20-26-1353 / 제품에 표기되어 있는 사용방법과 사용상 주의사항을 준수해 주시기 바랍니다.',
    price: [['300g', 130000]],
    category: {
      level_1_category: '홈',
      level_2_category: '홈',
    },
    properties: [
      { type: '향', values: ['우디', '흙내음', '유향'] },
      {
        type: '크기 및 연소 시간',
        values: ['지름 86 mm/3.4” x 높이 104 mm/4.1”, 연소시간 약 55-65시간'],
      },
      { type: '주요 성분', values: ['사이프러스', '시더', '베티버'] },
    ],
  },
  {
    title: '아가니스 아로마틱 캔들',
    img_url: 'test.png',
    description:
      '카다멈과 미모사 그리고 은은한 토바코가 어우러져 탕헤르 분위기를 떠오르게 하는 아로마 향초. (*안전기준 적합확인 신고번호: CB20-26-1355 / 제품에 표기되어 있는 사용방법과 사용상 주의사항을 준수해 주시기 바랍니다.',
    price: [['300g', 130000]],
    category: {
      level_1_category: '홈',
      level_2_category: '홈',
    },
    properties: [
      { type: '향', values: ['우디', '흙내음', '유향'] },
      {
        type: '크기 및 연소 시간',
        values: ['지름 86 mm/3.4” x 높이 104 mm/4.1”, 연소시간 약 55-65시간'],
      },
      { type: '주요 성분', values: ['카다멈', '미모사', '토바코'] },
    ],
  },
  {
    title: '칼리푸스 아로마틱 캔들',
    img_url: 'test.png',
    description:
      '프랑킨센스, 과이악우드, 상쾌한 시소 노트가 어우러져 제례 의식을 떠올리는 아로마 향초. (*안전기준 적합확인 신고번호: CB20-26-1354 / 제품에 표기되어 있는 사용방법과 사용상 주의사항을 준수해 주시기 바랍니다.)',
    price: [['300g', 130000]],
    category: {
      level_1_category: '홈',
      level_2_category: '홈',
    },
    properties: [
      { type: '향', values: ['우디', '흙내음', '그린'] },
      {
        type: '크기 및 연소 시간',
        values: ['지름 86 mm/3.4” x 높이 104 mm/4.1”, 연소시간 약 55-65시간'],
      },
      { type: '주요 성분', values: ['베티버', '프랑킨센스', '시소'] },
    ],
  },
  {
    title: '이솝: 더 북',
    img_url: 'test.png',
    description:
      '336 페이지에 달하는 우리의 첫 번째 도서가 린넨 양장본으로 리졸리 뉴욕 출판사에서 출간됩니다. 제품 제조에서 공간 디자인, 초창기부터 현재에 이르는 이솝의 지난 30여년간을 담은 연대기가 뛰어난 사진과 아카이브 이미지와 함께 기록되었습니다.',
    price: [['2.180 kg', 50000]],
    category: {
      level_1_category: '홈',
      level_2_category: '문학',
    },
    properties: [
      {
        type: '어울리는 대상',
        values: ['디자인 매니아', '호기심 많은 독자', '예술 애호가'],
      },
      {
        type: '주요 참여자',
        values: ['데니스 파피티스와 제니퍼 다운 공저', '야마모토 유타카 사진'],
      },
    ],
  },
];

module.exports = items;
