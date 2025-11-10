import type { NextConfig } from "next";
require('dotenv').config();

module.exports = {
	/* config options here */
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'lastfm.freetls.fastly.net',
			port: '',
			pathname: '/**',
		}]
	}
};

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
};

export default nextConfig;
