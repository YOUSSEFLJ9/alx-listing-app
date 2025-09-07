import type React from "react"
// Card Component Props
export interface CardProps {
  title: string
  description?: string
  image?: string
  price?: number
  rating?: number
  className?: string
}

// Button Component Props
export interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "small" | "medium" | "large"
  disabled?: boolean
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

// Property/Listing Interface
export interface Property {
  id: string
  title: string
  description: string
  price: number
  rating: number
  image: string
  location: string
  amenities: string[]
  host: {
    name: string
    avatar: string
  }
}

// User Interface
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}
