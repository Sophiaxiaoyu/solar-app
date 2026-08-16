import { solarTerms } from '../data/solarTerms';

export function getCurrentSolarTerm() {
  // 这里简化处理，返回第一个春季节气
  return enrichSolarTermData(solarTerms.spring[0]);
}

export function getSolarTermDetail(termName) {
  if (!termName) return null;
  
  const decodedTermName = decodeURIComponent(termName);
  
  // 遍历所有季节查找对应节气
  for (const seasonTerms of Object.values(solarTerms)) {
    const term = seasonTerms.find(term => term.name === decodedTermName);
    if (term) {
      return enrichSolarTermData(term);
    }
  }
  
  console.log(`Term not found: ${termName}`);
  return null;
}

function enrichSolarTermData(term) {
  if (!term) return null;
  
  // 确保所有必需的字段都存在
  return {
    ...term,
    id: term.id || term.name,
    name: term.name,
    date: term.date,
    description: term.description,
    image: term.image || `https://resource.letsbuild.fun/24/${encodeURIComponent(term.name)}.gif`,
    customs: term.customs || [`${term.name}习俗一`, `${term.name}习俗二`, `${term.name}习俗三`],
    characteristics: term.characteristics || [`${term.name}特征一`, `${term.name}特征二`, `${term.name}特征三`],
    proverbs: term.proverbs || [`${term.name}谚语一`, `${term.name}谚语二`, `${term.name}谚语三`],
    poetry: term.poetry || [{
      title: term.name,
      author: '佚名',
      content: '暂无诗词'
    }]
  };
}