import path from 'path'
import { URL } from 'url'

const __dirname = new URL('.', import.meta.url).pathname

const nextConfig = {
  distDir: 'dist',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/theme'), path.join(__dirname, 'src/utils')],
    prependData: `
      @import "_variables.scss";
      @import "_classes.scss";
      @import "_animations.scss";
    `
  }
};

export default nextConfig;
