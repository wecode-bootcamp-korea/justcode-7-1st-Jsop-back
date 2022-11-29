// TODO 4 - builder 생성

const productIdBuilder = (productId) => {
	if (productId) {
		return `
		  AND item.id = ${productId}
		`
	}
	return '' 
}


const categoryLevelOneBuilder = (level) => {
	if (level) {
		return `
		  AND 1_level_category.content = '${level}'
		`
	}
	return '' 
}

const categoryLevelTwoBuilder = (level) => {
	if (level) {
		return `
		  AND 2_level_category.content = '${level}'
		`
	}
	return '' 
}


// 위 두 함수 합친 것
const categoryBuilder = (categoryLevel, content) => {
	if (category && content) {
		return `
		  AND ${categoryLevel}.content = '${content}
		`
	}
}