'use client'

import { Branch } from '@/lib/data/branches'

interface BranchCardProps {
  branch: Branch
}

export default function BranchCard({ branch }: BranchCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{branch.name}</h3>
        </div>
        {branch.isMain && (
          <span
            className="shrink-0 text-xs font-bold text-white px-3 py-1 rounded-full ml-3"
            style={{ backgroundColor: '#F97316' }}
          >
            Head Office
          </span>
        )}
      </div>

      {/* Details */}
      <div className="space-y-3 flex-1">
        <div className="flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">📍</span>
          <p className="text-gray-600 text-sm leading-relaxed">{branch.address}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg shrink-0">📞</span>
          <a
            href={`tel:${branch.phone.replace(/\s/g, '')}`}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            {branch.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg shrink-0">✉️</span>
          <a
            href={`mailto:${branch.email}`}
            className="text-blue-600 text-sm font-medium hover:underline break-all"
          >
            {branch.email}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">🕒</span>
          <p className="text-gray-600 text-sm">{branch.hours}</p>
        </div>
      </div>

      {/* Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block w-full text-center py-2.5 px-4 rounded-lg border-2 font-semibold text-sm transition-all duration-200 hover:text-white"
        style={{
          borderColor: '#1B3F8B',
          color: '#1B3F8B',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.backgroundColor = '#1B3F8B'
          el.style.color = 'white'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.backgroundColor = 'transparent'
          el.style.color = '#1B3F8B'
        }}
      >
        Get Directions →
      </a>
    </div>
  )
}
