const path = require('path')
const Fontmin = require('fontmin');

new Fontmin()
  .src(path.join(__dirname, './HanzipenSC-Regular.otf'))
  .use(Fontmin.otf2ttf())
  .use(Fontmin.glyph(
    {
      text: '信用极好',
      hinting: false
    }))
  .dest(path.join(__dirname, '../src/fonts'))
  .run((err, files) => {
    if (err) {
      console.warn('extract fonts err.')
      throw err;
    }
    console.log('extract success!')
  })
