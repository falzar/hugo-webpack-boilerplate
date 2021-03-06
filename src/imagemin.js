/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Mark van Seventer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Exports.
export default {
  // @see https://github.com/imagemin/imagemin-gifsicle#api
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3
  },

  // @see https://github.com/imagemin/imagemin-mozjpeg#api
  mozjpeg: {
    quality: 75
  },

  // @see https://github.com/imagemin/imagemin-pngquant#api
  pngquant: {
    quality: '65-85',
    speed: 1
  },

  // @see https://github.com/imagemin/imagemin-svgo#api
  svgo: {
    plugins: [
      { removeViewBox: true }
    ]
  },

  // @see https://github.com/imagemin/imagemin-webp#api
  // webp: {
  //   quality: 75,
  //   method: 6
  // }
};
