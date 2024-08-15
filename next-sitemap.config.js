module.exports = {
  siteUrl: 'https://tcdobrynya.ru',  // Ваш домен
  generateRobotsTxt: true,  // Создание файла robots.txt
  sitemapSize: 5000,  // Количество URL на один файл карты сайта
  exclude: ['/admin/*'],  // Страницы, которые нужно исключить
  changefreq: 'weekly',  // Частота обновления страниц
  priority: 0.8,  // Приоритет страниц (0.0 - 1.0)
  transform: async (config, path) => {
    return {
      loc: path, // Каждая страница
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.8,  // Высший приоритет для главной страницы
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
