import { defaultContent, type SiteContent } from './defaultContent';

export function mergeContent(
  incoming: Partial<SiteContent> | null | undefined,
  defaults: SiteContent = defaultContent,
): SiteContent {
  if (!incoming || Object.keys(incoming).length === 0) return defaults;

  const merged = { ...defaults };

  for (const key of Object.keys(incoming) as Array<keyof SiteContent>) {
    const inVal = incoming[key];
    if (!inVal) continue;
    if (Array.isArray(inVal)) {
      (merged as Record<string, unknown>)[key as string] = inVal;
    } else if (typeof inVal === 'object') {
      (merged as Record<string, unknown>)[key as string] = {
        ...(defaults[key] as Record<string, unknown>),
        ...inVal,
      };
    }
  }

  return merged as SiteContent;
}

export function mergePageContent(
  incoming: Record<string, unknown> | undefined,
  defaults: Record<string, unknown>,
): Record<string, unknown> {
  if (!incoming || Object.keys(incoming).length === 0) return defaults;
  return { ...defaults, ...incoming };
}
