import React, { useState, useCallback } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Save,
  RotateCcw,
  FileText,
  Plus,
  Trash2,
  AlertTriangle,
  Check,
} from 'lucide-react';
import { useSiteContent, useSiteContentMutation } from '../context/SiteContentContext';
import type { SiteContent, PageKey } from '../lib/defaultContent';

type Primitive = string | number | boolean | null;
type FieldValue = Primitive | Primitive[] | Record<string, unknown> | unknown[];
type FieldRow = { path: string[]; label: string; value: FieldValue; kind: 'text' | 'textarea' | 'number' | 'array' };

type SectionEntry = { k: PageKey; label: string };

const SECTIONS: SectionEntry[] = [
  { k: 'home', label: 'Home Page' },
  { k: 'about', label: 'About Page' },
  { k: 'programs', label: 'Programs Page' },
  { k: 'impact', label: 'Impact Page' },
  { k: 'stories', label: 'Stories' },
  { k: 'news', label: 'News' },
  { k: 'faq', label: 'FAQ' },
  { k: 'partners', label: 'Partners' },
  { k: 'gallery', label: 'Gallery' },
  { k: 'contact', label: 'Contact Page' },
  { k: 'getInvolved', label: 'Get Involved Page' },
  { k: 'volunteer', label: 'Volunteer Page' },
  { k: 'transparency', label: 'Transparency Page' },
  { k: 'team', label: 'Team Page' },
  { k: 'foodSupport', label: 'Food Support Detail' },
  { k: 'householdCare', label: 'Household Care Detail' },
  { k: 'volunteerCorps', label: 'Volunteer Corps Detail' },
  { k: 'elderlySupport', label: 'Elderly Support Detail' },
  { k: 'programDetail', label: 'Program Detail (shared)' },
];

function setInPath(obj: Record<string, unknown>, path: string[], value: unknown): Record<string, unknown> {
  if (path.length === 0) return obj;
  const [head, ...rest] = path;
  if (rest.length === 0) {
    return { ...obj, [head]: value };
  }
  const current = ((obj[head] as Record<string, unknown>) ?? {}) as Record<string, unknown>;
  return { ...obj, [head]: setInPath(current, rest, value) };
}

function flattenToFields(data: Record<string, unknown>, prefix: string[] = []): FieldRow[] {
  const rows: FieldRow[] = [];
  for (const [k, v] of Object.entries(data)) {
    const path = [...prefix, k];
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      rows.push(...flattenToFields(v as Record<string, unknown>, path));
    } else if (Array.isArray(v)) {
      rows.push({ path, label: k, value: v as FieldValue, kind: 'array' });
    } else if (typeof v === 'number') {
      rows.push({ path, label: k, value: v as Primitive, kind: 'number' });
    } else if (typeof v === 'boolean') {
      rows.push({ path, label: k, value: v as Primitive, kind: 'text' });
    } else {
      rows.push({ path, label: k, value: (v as Primitive) ?? '', kind: 'text' });
    }
  }
  return rows;
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

export default function AdminContent() {
  const { content, loading } = useSiteContent();
  const { update } = useSiteContentMutation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [local, setLocal] = useState<Record<string, Record<string, unknown>>>({});
  const [dirtySections, setDirtySections] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');

  const initLocal = useCallback(
    (c: SiteContent) => {
      if (!c?.pages) return;
      const pages: Record<string, Record<string, unknown>> = {};
      for (const s of SECTIONS) {
        const raw = c.pages[s.k];
        pages[s.k] = typeof raw === 'object' && raw !== null ? { ...(raw as Record<string, unknown>) } : {};
      }
      setLocal(pages);
      setDirtySections(new Set());
      setSavedMsg('');
    },
    [],
  );

  useState(() => {
    if (!loading && content) {
      initLocal(content);
    }
  });

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const patchField = (sectionKey: string, pathStr: string, value: unknown) => {
    const path = pathStr.split('.');
    setLocal((prev) => {
      const sectionData = (prev[sectionKey] ?? {}) as Record<string, unknown>;
      return { ...prev, [sectionKey]: setInPath(sectionData, path, value) };
    });
    setDirtySections((prev) => {
      const next = new Set(prev);
      next.add(sectionKey);
      return next;
    });
    setSavedMsg('');
  };

  const resetSection = (sectionKey: string) => {
    setLocal((prev) => {
      const src = content.pages[sectionKey as PageKey];
      const srcObj = typeof src === 'object' && src !== null ? (src as Record<string, unknown>) : {};
      return { ...prev, [sectionKey]: { ...srcObj } };
    });
    setDirtySections((prev) => {
      const next = new Set(prev);
      next.delete(sectionKey);
      return next;
    });
    setSavedMsg('');
  };

  const publishAll = async () => {
    if (dirtySections.size === 0) return;
    setSaving(true);
    try {
      const patch: Record<string, unknown> = { pages: {} as Record<string, unknown> };
      for (const key of dirtySections) {
        (patch.pages as Record<string, unknown>)[key] = local[key];
      }
      await update(patch);
      initLocal(content);
      setSavedMsg(`Saved ${dirtySections.size} section(s) successfully.`);
      setTimeout(() => setSavedMsg(''), 4000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save';
      alert('Error saving: ' + message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-on-surface-variant">Loading content…</div>;
  }

  const sectionData = (key: string) => (local[key] ?? {}) as Record<string, unknown>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">Page Content Manager</h1>
          <p className="text-sm text-on-surface-variant mt-1">Edit text across the entire site. Click "Publish" to apply changes.</p>
        </div>
        <div className="flex items-center gap-3">
          {savedMsg && (
            <span className="text-sm text-green-600 font-medium flex items-center gap-1">
              <Check size={14} /> {savedMsg}
            </span>
          )}
          <button
            onClick={publishAll}
            disabled={saving || dirtySections.size === 0}
            className="flex items-center gap-2 px-6 py-2.5 bg-secondary-container text-on-primary font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving…' : (
              <>
                <Save size={16} /> Publish All Changes
              </>
            )}
          </button>
        </div>
      </div>

      {dirtySections.size > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center gap-2 text-sm text-amber-800">
          <AlertTriangle size={16} />
          You have unsaved changes in {dirtySections.size} section(s). Click "Publish All Changes" to apply.
        </div>
      )}

      <div className="space-y-3">
        {SECTIONS.map(({ k, label }) => {
          const isOpen = Boolean(expanded[k]);
          const isDirty = dirtySections.has(k);
          const data = sectionData(k);
          const fields = flattenToFields(data);

          return (
            <div key={k} className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors"
                onClick={() => toggle(k)}
              >
                <span className="font-display font-bold text-primary">{label}</span>
                <div className="flex items-center gap-2">
                  {isDirty && (
                    <button
                      onClick={(e) => { e.stopPropagation(); resetSection(k); }}
                      className="p-1.5 rounded hover:bg-surface-container-low text-on-surface-variant hover:text-primary"
                      title="Discard changes"
                    >
                      <RotateCcw size={14} />
                    </button>
                  )}
                  {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 border-t border-outline-variant/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {fields.map((field) => (
                      <FieldEditor
                        field={field}
                        value={field.value}
                        onChange={(next) => patchField(k, field.path.join('.'), next)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FieldEditor({ field, value, onChange }: { field: FieldRow; value: FieldValue; onChange: (value: FieldValue) => void }) {
  const label = formatLabel(field.label);

  if (field.kind === 'array') {
    const arr = Array.isArray(value) ? value : [];
    return (
      <div className="md:col-span-2 border border-outline-variant/10 rounded-lg p-4 space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{label} ({arr.length} items)</div>
        <div className="space-y-2">
          {arr.map((item: unknown, idx: number) => (
            <ArrayItemRow
              key={idx}
              item={item}
              index={idx}
              pathPrefix={field.path.join('.')}
              onChange={(nextItem) => {
                const next = [...arr];
                next[idx] = nextItem;
                onChange(next);
              }}
              onRemove={() => {
                onChange(arr.filter((_, i) => i !== idx));
              }}
            />
          ))}
        </div>
        <button
          onClick={() => {
            const blank: Record<string, unknown> = { id: uid(), text: '', value: '' };
            onChange([...arr, blank]);
          }}
          className="flex items-center gap-1 text-xs font-bold text-secondary-container hover:opacity-80"
        >
          <Plus size={12} /> Add Item
        </button>
      </div>
    );
  }

  if (field.kind === 'textarea') {
    return (
      <div>
        <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">{label}</label>
        <textarea
          value={String(value ?? '')}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full border border-outline-variant/30 rounded-lg px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-1 focus:ring-primary-container resize-y"
        />
      </div>
    );
  }

  return (
    <div>
      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">{label}</label>
      <input
        type={field.kind === 'number' ? 'number' : 'text'}
        value={field.kind === 'number' ? String(value ?? 0) : String(value ?? '')}
        onChange={(e) => {
          const next = field.kind === 'number' ? Number(e.target.value) || 0 : e.target.value;
          onChange(next);
        }}
        className="w-full border border-outline-variant/30 rounded-lg px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-1 focus:ring-primary-container"
      />
    </div>
  );
}

function ArrayItemRow({ item, index, pathPrefix, onChange, onRemove, key }: { item: unknown; index: number; pathPrefix: string; onChange: (next: Record<string, unknown>) => void; onRemove: () => void; key?: React.Key }) {
  const rec = item && typeof item === 'object' ? (item as Record<string, unknown>) : { text: String(item ?? '') };
  const entries = Object.entries(rec).filter(([k]) => k !== 'id');

  return (
    <div className="border border-outline-variant/5 rounded-lg p-3 space-y-2 bg-surface-container-low/50">
      {entries.map(([k, v]) => (
        <div key={k}>
          <label className="block text-[10px] font-semibold text-on-surface-variant/70 mb-1">{formatLabel(k)}</label>
          <input
            type="text"
            value={String(v ?? '')}
            onChange={(e) => onChange({ ...rec, [k]: e.target.value })}
            className="w-full border border-outline-variant/20 rounded px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-primary-container"
          />
        </div>
      ))}
      <div className="flex gap-2 pt-1">
        <button onClick={() => onChange(rec)} className="px-2 py-1 bg-green-500 text-white text-[10px] font-bold rounded">Save</button>
        <button onClick={onRemove} className="px-2 py-1 border border-red-200 text-red-500 text-[10px] font-bold rounded hover:bg-red-50">
          <Trash2 size={10} className="inline mr-1" /> Remove
        </button>
      </div>
    </div>
  );
}
