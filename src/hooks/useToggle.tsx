import { useState, useCallback } from 'react';

export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggle] as const;
};
