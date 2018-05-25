const path = require('path')
const Fontmin = require('fontmin');

new Fontmin()
  .src(path.join(__dirname, './HanzipenSC-Regular.otf'))
  .use(Fontmin.glyph(
    {
      text: '信用极好'
    })
  )
  .dest(path.join(__dirname, '../src/fonts'))
  .run((err, files) => {
    if (err) {
      console.warn('extract fonts err.')
      throw err;
    }
    console.log('extract success!')
  })
