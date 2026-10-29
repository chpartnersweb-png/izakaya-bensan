import { shop, description, restaurantSchema } from './bensan';
import { SITE_URL } from './site.mjs';

export const seo = {
  title: '居酒屋ベンさん｜町田のフィリピン料理・土日食べ放題',
  description,
  canonical: SITE_URL,
  locale: 'ja_JP',
  language: 'ja',
  imageAlt: '居酒屋ベンさんの外観。東京都町田市原町田、JR町田駅ターミナル改札口から徒歩2分。',
};

export function createStructuredData(imageUrl: string) {
  const id = (fragment: string) => new URL(fragment, SITE_URL).href;
  const restaurantId = id('#restaurant');
  const websiteId = id('#website');
  const pageId = id('#webpage');
  const imageId = id('#primaryimage');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...restaurantSchema,
        '@id': restaurantId,
        url: SITE_URL,
        telephone: shop.telephone.replace(/^0/, '+81').replace(/-/g, ''),
        image: [imageUrl],
        hasMenu: id('#menu'),
        mainEntityOfPage: { '@id': pageId },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: shop.name,
        inLanguage: seo.language,
        publisher: { '@id': restaurantId },
      },
      {
        '@type': 'WebPage',
        '@id': pageId,
        url: SITE_URL,
        name: seo.title,
        description: seo.description,
        inLanguage: seo.language,
        isPartOf: { '@id': websiteId },
        about: { '@id': restaurantId },
        mainEntity: { '@id': restaurantId },
        primaryImageOfPage: { '@id': imageId },
      },
      {
        '@type': 'ImageObject',
        '@id': imageId,
        url: imageUrl,
        contentUrl: imageUrl,
        width: 1200,
        height: 630,
        caption: seo.imageAlt,
        representativeOfPage: true,
      },
    ],
  };
}
