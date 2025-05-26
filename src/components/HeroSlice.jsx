import { ChevronRight, Egg } from "lucide-react"
import { Button } from "./ui/button"

import './HeroSlice.scss'

const HeroSlice = () => {
  const eggCount = Math.floor(Math.random() * 1000);

  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__grid">
            <div className="hero__content">
              <h1 className="hero__title">
                Sailing Dinghies for the Modern Chicken
              </h1>
              <p className="hero__description">
                Give your feathered friends the nautical adventure they deserve. Our custom-built sailing dinghies are
                designed specifically for chickens who dream of the open water.
              </p>
              <div className="hero__egg-count">
                <Egg className="animate-spin" />
                <p>{eggCount.toLocaleString()} eggs transported and counting!</p>
              </div>
              <div className="hero__actions">
                <Button size="lg">
                  Get Started
                  <ChevronRight />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hero__image-wrapper">
              <img alt="Chicken sailing in a custom dinghy" src="/chicken-dinghy-7.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSlice
