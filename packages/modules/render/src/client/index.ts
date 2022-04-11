import each from '@tinkoff/utils/array/each';
import { createElement, StrictMode } from 'react';
import type {
  EXTEND_RENDER,
  RENDERER_CALLBACK,
  USE_REACT_STRICT_MODE,
} from '@tramvai/tokens-render';
import type { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';
import type { INITIAL_APP_STATE_TOKEN } from '@tramvai/tokens-common';
import { renderReact } from '../react';
import { renderer } from './renderer';

export function rendering({
  pageService,
  log,
  consumerContext,
  customRender,
  extendRender,
  di,
  useStrictMode,
  rendererCallback,
  initialState,
}: {
  pageService: typeof PAGE_SERVICE_TOKEN;
  log: any;
  consumerContext: any;
  extendRender?: typeof EXTEND_RENDER;
  customRender?: any;
  di: any;
  useStrictMode: typeof USE_REACT_STRICT_MODE;
  rendererCallback?: typeof RENDERER_CALLBACK;
  initialState?: typeof INITIAL_APP_STATE_TOKEN;
}) {
  return new Promise<void>((resolve, reject) => {
    let renderResult = renderReact({ pageService, di, initialState }, consumerContext);

    if (extendRender) {
      each((render) => {
        renderResult = render(renderResult);
      }, extendRender);
    }

    if (customRender) {
      return customRender(renderResult);
    }

    if (useStrictMode) {
      renderResult = createElement(StrictMode, null, renderResult);
    }

    const container = document.querySelector('.application');
    const executeRendererCallbacks = (renderErr?: Error) =>
      rendererCallback?.forEach((cb) => {
        try {
          cb(renderErr);
        } catch (cbError) {
          // eslint-disable-next-line no-console
          console.error(cbError);
        }
      });
    const callback = () => {
      log.debug('App rendering');
      document.querySelector('html').classList.remove('no-js');
      executeRendererCallbacks();
      resolve();
    };
    const params = { element: renderResult, container, callback, log };

    try {
      renderer(params);
    } catch (e) {
      executeRendererCallbacks(e);
      reject(e);
    }
  });
}
