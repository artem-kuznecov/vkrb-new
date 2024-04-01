import path from 'path'
import { URL } from 'url'

const __dirname = new URL('.', import.meta.url).pathname

const nextConfig = {
  distDir: 'dist',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/theme')],
    prependData: `
      @import "_variables.scss";
      @import "_classes.scss";
    `
  }
};

export default nextConfig;
