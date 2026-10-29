// Prices follow the supplied PDFs; missing prices and conditions are not inferred.
export const shop = {
  name: '居酒屋ベンさん', telephone: '042-860-6594', telephoneHref: 'tel:0428606594',
  postalCode: '194-0013', address: '東京都町田市原町田4-1-5', building: '第5加藤ビル',
  access: 'JR町田駅 ターミナル改札口から徒歩2分',
  hours: [{ label: '平日', time: '17:00–23:00' }, { label: '土日祝', time: '12:00–23:00' }],
  closed: '水曜日', payment: '現金・各種クレジットカード・PayPay等', parking: '提携駐車場はございません',
};
const mapQuery = encodeURIComponent(`${shop.name} ${shop.address} ${shop.building}`);
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=17&output=embed`;
export const navigation = [
  { href: '#about', label: 'ベンさんについて', en: 'ABOUT' },
  { href: '#buffet', label: '土日の食べ放題', en: 'WEEKEND' },
  { href: '#menu', label: 'お料理', en: 'FOOD' },
  { href: '#drinks', label: 'ドリンク', en: 'DRINK' },
  { href: '#space', label: 'お席のご案内', en: 'SPACE' },
  { href: '#access', label: 'アクセス', en: 'ACCESS' },
];
export type MenuItem = { name: string; price: string; note?: string };
export const foodGroups: { title: string; en: string; items: MenuItem[] }[] = [
  { title: '焼き鳥と、いつものおつまみ', en: 'IZAKAYA FAVORITES', items: [
    { name: '大山鶏 ネギ間・胸正肉', price: '各250', note: '焼き鳥 各1本' },
    { name: 'レバー・砂肝・皮ほか', price: '各200', note: '焼き鳥 各1本' },
    { name: '冷奴・枝豆・おしんこ', price: '各400' },
    { name: 'たまご料理', price: '600', note: 'ベーコンエッグ・ハムエッグ・ベーコンオムレツ' },
    { name: '肉野菜炒め', price: '600' }, { name: '野菜サラダ', price: '500' },
  ] },
  { title: '鉄板焼き・リブ', en: 'HOT PLATES & RIBS', items: [
    { name: '鉄板焼き シーフード', price: '1,800' }, { name: '鉄板焼き ビーフステーキ', price: '1,800' },
    { name: 'バックリブ', price: '800', note: 'ミニリブ2本・添え物' },
    { name: 'スペアリブ', price: '1,500', note: 'ボイルドエッグ・野菜添え' },
  ] },
  { title: 'しめのひと皿', en: 'ONE MORE PLATE', items: [
    { name: '焼きそば', price: '500' }, { name: 'スパゲッティ', price: '600' },
  ] },
];
export const drinks: MenuItem[] = [
  { name: '中ジョッキ生ビール', price: '600' }, { name: '瓶ビール', price: '700' },
  { name: '酎ハイ・サワー・ハイボール', price: '各450', note: '水割り・お湯割りもございます' },
  { name: '芋焼酎', price: '550', note: '水割り・ロック' },
  { name: '日本酒', price: '900〜', note: '180ml 900円 ／ 300ml 1,400円' },
  { name: 'ホッピーセット', price: '500', note: '中 300円' }, { name: 'ワイン', price: '500' },
  { name: 'ソフトドリンク', price: '400', note: 'コーラ・オレンジジュース・ウーロン茶ほか' },
];
export const whiskyNames = ['山崎NV', '白州NV', '響JH', '響BC', '山崎12年', 'Ballantine’s 30年'];
export const description = '町田でフィリピン料理を楽しむなら居酒屋ベンさん。JR町田駅ターミナル改札口から徒歩2分。土日は12時からフィリピン料理食べ放題、毎日19時までハッピーアワー。居酒屋メニュー、ガーデンBBQ、2階カラオケルームも。水曜定休。';
export const restaurantSchema = {
  '@type': 'Restaurant', name: shop.name, description, telephone: shop.telephone,
  address: { '@type': 'PostalAddress', postalCode: shop.postalCode, streetAddress: `原町田4-1-5 ${shop.building}`, addressLocality: '町田市', addressRegion: '東京都', addressCountry: 'JP' },
  servesCuisine: ['フィリピン料理', '居酒屋料理'], hasMap: mapUrl,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'], opens: '17:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '12:00', closes: '23:00' },
  ],
};
