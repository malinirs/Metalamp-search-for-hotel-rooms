// const faviconsContext = require.context(
//   './', // Указывает на папку favicons
//   true, // Рекурсивно
//   /\.(svg|png|ico|xml|json)$/ // Поддерживаемые форматы
// );

// faviconsContext.keys().forEach(faviconsContext);

const faviconsContext = require.context( 
  '!!file-loader?name=assets/favicons/[name].[ext]!.', 
  true, 
  /\.(svg|png|ico|xml|json)$/ 
);
faviconsContext.keys().forEach(faviconsContext);
