import getConfig from "next/config";
const nextConfig = getConfig();

export const BASE_PATH = nextConfig && nextConfig.publicRuntimeConfig.BASEPATH;
