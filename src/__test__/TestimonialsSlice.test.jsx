import { vi, beforeEach } from 'vitest'
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import TestimonialsSlice from '@/components/TestimonialsSlice'
import * as api from '@/services/api'

// Mock testimonials data
const mockTestimonials = [
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
]

describe('TestimonialsSlice', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  it('renders testimonials successfully', async () => {
    // Mock the fetchTestimonials function
    vi.spyOn(api, 'fetchTestimonials').mockResolvedValue(mockTestimonials)

    render(<TestimonialsSlice />)

    expect(screen.getByText(/Testimonials/i)).toBeInTheDocument()
    expect(screen.getByText(/Hear what our feathered customers have to say./i)).toBeInTheDocument()

    // Wait for testimonials to appear
    await waitFor(() => {
      expect(api.fetchTestimonials).toHaveBeenCalledTimes(1)
      // expect(screen.getByText(/Henrietta/i)).toBeInTheDocument()
      expect(screen.getByText(/Rhode Island Red/i)).toBeInTheDocument()
      expect(screen.getByText(/Cluck cluck!/i)).toBeInTheDocument()
      expect(screen.getByText(/Colonel Cluckington/i)).toBeInTheDocument()
      expect(screen.getByText(/Nugget/i)).toBeInTheDocument()
    })
  })

  it('handles API error gracefully', async () => {
    const error = new Error('Failed to fetch data. Please try again.')
    
    // Mocking for error scenario
    vi.spyOn(api, 'fetchTestimonials').mockRejectedValueOnce(error)

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<TestimonialsSlice />)

    // The heading should still be present even if testimonials fail to load
    expect(api.fetchTestimonials).toHaveBeenCalledTimes(1)
    expect(screen.getByText(/Testimonials/i)).toBeInTheDocument()

    // Check error handling
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching testimonials:", error)
    })

    consoleErrorSpy.mockRestore()
  })
})