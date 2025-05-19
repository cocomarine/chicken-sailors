import { LifeBuoy, Wind, Egg } from "lucide-react"

const FeaturesSlice = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Chickens Love Our Dinghies</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our sailing dinghies are designed with chicken comfort, safety, and egg transport in mind.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <LifeBuoy className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Chicken-Safe Design</h3>
            <p className="text-center text-gray-500">
              Built with special flotation devices and stabilizers to keep your chickens dry and upright.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <Wind className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Easy Sailing</h3>
            <p className="text-center text-gray-500">
              Specially designed sails that can be controlled with a peck or a wing flap.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <Egg className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold">Egg Transport</h3>
            <p className="text-center text-gray-500">
              Secure egg storage compartments with varying capacities to safely transport eggs across water.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSlice
