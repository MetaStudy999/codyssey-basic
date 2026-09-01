const path = require('path');
const { pptx } = require('./source/common');

require('./source/slides-01-04');
require('./source/slides-05-08');
require('./source/slides-09-12');
require('./source/slides-13-16');
require('./source/slides-17-20');

const outputPath = path.join(__dirname, 'Codyssey_Technical_Diagram_Master_Library.pptx');
pptx.writeFile({ fileName: outputPath });
