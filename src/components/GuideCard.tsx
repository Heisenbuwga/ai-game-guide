import React from 'react'
import { Theme } from '@/themes'

interface GuideCardProps {
  title: string
  content: string
  image?: string
  theme: Theme
}

const GuideCard: React.FC<GuideCardProps> = ({ title, content, image, theme }) => {
  return (
    <div className={`${theme.card} rounded-lg p-4 mb-6 shadow-md`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-3">{content}</p>

      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-md max-h-48 object-cover w-full"
          loading="lazy"
        />
      )}
    </div>
  )
}

export default GuideCard
