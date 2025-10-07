import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import rawData from '@myTypes/services.json';
import { sanitizeServices, type Service } from '@utils/sanitizeServices';

export function useServiceBySlug(): Service | undefined {
  const { slug } = useParams<{ slug: string }>();

  const services = useMemo(() => sanitizeServices(rawData.services), []);

  return useMemo(() => {
    if (!slug) return undefined;
    return services.find((s) => s.slug === slug);
  }, [slug, services]);
}
