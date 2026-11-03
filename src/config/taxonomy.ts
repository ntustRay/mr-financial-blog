export const categories = [
  { name: 'Investing', description: '股票研究工具、資料來源與使用方式。', primary: true },
  { name: 'Housing', description: '租屋、看屋與居住支出。', primary: true },
  { name: 'Life', description: '生活資訊、消費與歷史紀錄。', primary: true },
] as const;

export type CategoryName = (typeof categories)[number]['name'];

export const isCategory = (value: string): value is CategoryName =>
  categories.some((category) => category.name === value);

export const legacyCategories: Record<string, { name: string; destinations: CategoryName[] }> = {
  'career-life': { name: 'Career & Life', destinations: ['Housing', 'Life'] },
};
