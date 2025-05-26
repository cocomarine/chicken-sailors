import { render, screen } from '@testing-library/react'
import TestimonialsSlice from './TestimonialsSlice'

describe('TestimonialsSlice', () => {
  it('renders without crashing', () => {
    render(<TestimonialsSlice />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })
})
