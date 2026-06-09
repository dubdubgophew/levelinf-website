/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://levelinf.app',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/privacy'),
    await config.transform(config, '/terms'),
  ],
}
