import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* headers, building stats, and image */}

      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl">[Site name]</h1>
            <h2 className="text-lg">[Building name]</h2>
          </div>
          <div className="grid grid-cols-2">
            <p>Year of original construction</p>
            <p>[pull from DB]</p>
            <p>Facility size (gross sq. ft.)</p>
            <p>[pull from DB]</p>
            <p>Number of floors</p>
            <p>[pull from DB]</p>
            <p>Address</p>
            <p>[pull from DB]</p>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <p>Total cost of corrective actions</p>
            <p>[pull from DB]</p>
            <p>Total cost of predicted renewals</p>
            <p>[pull from DB]</p>
            <p>Current replacement value</p>
            <p>[pull from DB]</p>
            <p>FCI</p>
            <p>[pull from DB]</p>
          </div>
        </div>

        <div className="border">
          <Image
            src="public/file.svg"
            width={400}
            height={400}
            alt={"Picture of the building"}
          />
        </div>
      </div>

      {/* FCI "thermometer" */}

      <div className="mt-8">
        <div className="grid grid-cols-20">
          <>
            <div className="col-span-8 bg-red-400">
              <p>Very Poor</p>
            </div>
            <div className="col-span-10 bg-orange-400">
              <p>Poor</p>
            </div>
            <div className="bg-yellow-400">
              <p>Fair</p>
            </div>
            <div className="bg-green-400">
              <p>Good</p>
            </div>
          </>

          <>
            <div className="col-span-2">
              <p>100%</p>
            </div>
            <div className="col-span-2">
              <p>90%</p>
            </div>
            <div className="col-span-2">
              <p>80%</p>
            </div>
            <div className="col-span-2">
              <p>70%</p>
            </div>
            <div className="col-span-2">
              <p>60%</p>
            </div>
            <div className="col-span-2">
              <p>50%</p>
            </div>
            <div className="col-span-2">
              <p>40%</p>
            </div>
            <div className="col-span-2">
              <p>30%</p>
            </div>
            <div className="col-span-2">
              <p>20%</p>
            </div>
            <div>
              <p>10%</p>
            </div>
            <div>
              <p>5%</p>
            </div>
          </>
        </div>
      </div>

      {/* charts */}

      <div className="flex justify-between mt-6">
        <div className="border flex-grow-1 mr-4">
          <p>Placeholder for chart</p>
        </div>
        <div className="border flex-grow-1 ml-4">
          <p>Placeholder for chart</p>
        </div>
      </div>
    {/* building summaries */}

    <div>
      <h2 className="text-lg mt-8">Building Summary: [building name]</h2>
      <strong>Architectural</strong>
      <p>Placeholder for architectural summary</p>
      <strong>Structural</strong>
      <p>Placeholder for structural summary</p>
      <strong>Civil</strong>
      <p>Placeholder for civil summary</p>
      <strong>Mechanical</strong>
      <p>Placeholder for mechanical summary</p>
      <strong>Electrical</strong>
      <p>Placeholder for electrical summary</p>
      <strong>Plumbing</strong>
      <p>Placeholder for plumbing summary</p>
    </div>

    {/* corrective actions */}

    <div>
      <h2 className="text-lg mt-8">Corrective Actions: [building name]</h2>
      <p className="border">Placeholder for corrective action charts</p>
    </div>

    {/* facility conditions */}

    <div>
      <h2 className="text-lg mt-8">Facility Conditions: [building name]</h2>
      <p className="border">Placeholder for facility conditions chart</p>
    </div>

    </div>
  );
}
