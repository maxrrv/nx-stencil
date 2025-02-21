import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { resolve } from 'path';

const customElementsDir = 'dist/components';

const resolvePath = (relativePath: string): string =>
  resolve(__dirname, relativePath).replace(/\\/g, '/');

export const config: Config = {
  namespace: 'core',
  sourceMap: true,
  /* -------------------------------------------------------------------------- */
  /*                                   Targets                                  */
  /* -------------------------------------------------------------------------- */
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    react({
      outDir: resolvePath('../core-react/src/'),
      customElementsDir,
    }),
  ],
  /* -------------------------------------------------------------------------- */
  /*                                   Extras                                   */
  /* -------------------------------------------------------------------------- */
  extras: {
    enableImportInjection: true,
  },
};
