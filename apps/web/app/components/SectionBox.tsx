'use client';

import { spacing, radii, shadows, colors } from '@/designTokens';

export function SectionBox() {
  return (
    <div
      style={{
        padding: spacing?.md ?? '1rem',
        borderRadius: radii?.lg ?? '12px',
        boxShadow: shadows?.md ?? '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: colors?.background ?? '#ffffff',
      }}
    >
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        SectionBox Demo
      </h2>
      <p style={{ fontSize: '16px', color: '#555' }}>
        This component uses your custom design tokens for padding, radius, and shadow.
      </p>
    </div>
  );
}
