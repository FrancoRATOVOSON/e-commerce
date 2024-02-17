import * as React from 'react'

import { useFetchTiles } from '@overview/_hooks'

import InfoTile from './info-tile'

export default function InfoTiles() {
  const tilesData = useFetchTiles()

  return (
    <>
      {tilesData.map(({ icon, label, value }) => (
        <InfoTile icon={icon} key={label} label={label} value={value} />
      ))}
    </>
  )
}
