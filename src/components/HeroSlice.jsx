import { ChevronRight, Egg } from "lucide-react"
import { Button } from "./ui/button"

import './HeroSlice.scss'

const HeroSlice = () => {
  const eggCount = Math.floor(Math.random() * 1000);

  return (
    <>
      <section className="hero">
        <h1>
          Sailing Dinghies for the Modern Chicken
        </h1>
        <p>
          Give your feathered friends the nautical adventure they deserve. Our custom-built sailing dinghies are
          designed specifically for chickens who dream of the open water.
        </p>
        <p>
          <Egg />
          {eggCount.toLocaleString()} eggs transported and counting!
        </p>
        <Button size="lg">
          Get Started
          <ChevronRight />
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
        <img alt="Chicken sailing in a custom dinghy" src="/chicken-dinghy-7.jpg" />
      </section>
    </>
  )
}

export default HeroSlice
