import { useEffect } from 'react';

export type CleanupEvent =
  | { type: 'pagehide'; event: PageTransitionEvent }
  | { type: 'visibilitychange'; state: DocumentVisibilityState }
  | { type: 'beforeunload'; event: BeforeUnloadEvent };

export interface CleanupOptions {
  warnOnExit?: boolean; // whether to warn user before leaving
}

/**
 * React hook to register cleanup events safely.
 * Replaces unsafe unload handlers with modern equivalents.
 */
export function useCleanupEvents(
  callback: (event: CleanupEvent) => void,
  options: CleanupOptions = {}
): void {
  const { warnOnExit = false } = options;

  useEffect(() => {
    const handlePageHide = (event: PageTransitionEvent) => {
      callback({ type: 'pagehide', event });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        callback({ type: 'visibilitychange', state: document.visibilityState });
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (warnOnExit) {
        event.preventDefault();
        event.returnValue = ''; // triggers browser confirmation
        callback({ type: 'beforeunload', event });
      }
    };

    window.addEventListener('pagehide', handlePageHide);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    if (warnOnExit) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (warnOnExit) {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      }
    };
  }, [callback, warnOnExit]);
}
