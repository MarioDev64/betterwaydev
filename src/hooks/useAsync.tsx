import { useState, useCallback } from 'react';

export const useAsync = <T, E = string>(
  asyncFunction: (...args: any[]) => Promise<T>
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(
    async (...args: any[]): Promise<T> => {
      setStatus('pending');
      setValue(null);
      setError(null);
      try {
        const response = await asyncFunction(...args);
        setValue(response);
        setStatus('success');
        return response;
      } catch (error) {
        setError(error as E);
        setStatus('error');
        throw error;
      }
    },
    [asyncFunction]
  );

  return { execute, status, value, error };
};