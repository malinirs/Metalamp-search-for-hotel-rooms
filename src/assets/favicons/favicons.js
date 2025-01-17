const faviconsContext = require.context(
  './', // Указывает на папку favicons
  true, // Рекурсивно
  /\.(svg|png|ico|xml|json)$/ // Поддерживаемые форматы
);

faviconsContext.keys().forEach(faviconsContext);
