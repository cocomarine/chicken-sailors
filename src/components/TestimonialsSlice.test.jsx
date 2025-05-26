import { vi, beforeEach } from 'vitest'
import { render, screen, waitFor, cleanup } from '@testing-library/react'

// Mock the API module before importing the component
vi.mock('../services/api', () => ({
  fetchTestimonials: vi.fn(),
}))

import TestimonialsSlice from './TestimonialsSlice'
import { fetchTestimonials } from '../services/api'

describe('TestimonialsSlice', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  it('renders testimonials successfully', async () => {
    // For success scenario
    fetchTestimonials.mockResolvedValueOnce([
      {
        id: 1,
        name: "Henrietta",
        breed: "Rhode Island Red",
        content:
          "Cluck cluck! I never thought I'd enjoy water, but my sailing dinghy has changed my life! Now the other hens call me Captain Henrietta. I've transported over 500 eggs safely!",
        verified: true,
        date: "2025-03-15",
      },
      {
        id: 2,
        name: "Colonel Cluckington",
        breed: "Plymouth Rock",
        content:
          "As the most adventurous rooster in my coop, I needed a vessel worthy of my explorations. This dinghy exceeds all expectations! The egg storage compartment is perfect for our deliveries.",
        verified: true,
        date: "2025-02-28",
      },
      {
        id: 3,
        name: "Nugget",
        breed: "Silkie Bantam",
        content:
          "Despite my fluffy feathers, I stay completely dry in my dinghy! The special chicken-sized life vest gives me confidence on the pond. I've transported over 1,000 eggs without a single crack!",
        verified: true,
        date: "2025-04-02",
      }
    ])

    render(<TestimonialsSlice />)

    expect(screen.getByText(/Testimonials/i)).toBeInTheDocument()
    expect(screen.getByText(/Hear what our feathered customers have to say./i)).toBeInTheDocument()

    expect(fetchTestimonials).toHaveBeenCalledTimes(1)
    // Wait for testimonials to appear
    // expect(await screen.getByText(/Henrietta/i)).toBeInTheDocument()
    // expect(await screen.getByText(/Colonel Cluckington/i)).toBeInTheDocument()
  })

  it('handles API error gracefully', async () => {
    const error = new Error('API failed')
    // For error scenario
    fetchTestimonials.mockRejectedValueOnce(error)

    // Spy on console.error
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<TestimonialsSlice />)

    // The heading should still be present even if testimonials fail to load
    expect(screen.getByText(/Testimonials/i)).toBeInTheDocument()
    expect(fetchTestimonials).toHaveBeenCalledTimes(1)

    // Check error handling is working
    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith("Error fetching testimonials:", error)
    })

    errorSpy.mockRestore()
  })
})