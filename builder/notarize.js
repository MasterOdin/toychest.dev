const dotenv = require('dotenv');
const { notarize } = require('electron-notarize');
const path = require('path');

dotenv.config({
  path: path.resolve(path.join(__dirname, '..', '.env')),
});

exports.default = async (context) => {
  if (process.env.SKIP_NOTARIZE === '1') {
    console.info('Skipping notarization');
    return;
  }

  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;
  const appPath = path.join(context.appOutDir, `${appName}.app`);

  console.info(`Notarizing ${appName} found at ${appPath}`);

  return await notarize({
    appBundleId: 'dev.toychest.app',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASSWORD,
  });
};
