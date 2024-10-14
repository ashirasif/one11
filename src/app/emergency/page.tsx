import React from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

export default function Page() {
  return (
    <>
      <Navbar />
      <section className='bg-black'>
        <div className="p-8 text-primary-foreground pt-40 pb-24 max-w-screen-xl mx-auto">
          {/* Emergency Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 gold-text">In case of an Emergency</h2>
            <p className="mb-4">
              In the event of a car accident, flat tire, or any other roadside emergency, our 24/7 helpline is available to assist you around the clock.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Car Accident:</strong> Call our helpline for guidance, emergency services, towing, or insurance claim support.
              </li>
              <li>
                <strong>Flat Tire:</strong> Contact us for roadside assistance to change the tire or towing.
              </li>
              <li>
                <strong>Other Issues:</strong> For fuel, engine, or lockout problems, our helpline is ready to assist.
              </li>
            </ul>
            <p className="mt-4">
              Call our helpline at <strong>+971 54 279 3533</strong> for prompt assistance.
            </p>
          </section>

          {/* Requirements Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 gold-text">Requirements</h2>
            <p className="mb-4">
              Renting a car with us is quick. Here are the documents you'll need:
            </p>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">For Tourists:</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>A valid international driver’s license</li>
                <li>A copy of your passport identification page</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">For Residents:</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>A valid Emirates ID</li>
                <li>A valid UAE driving license</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 gold-text">FAQ</h2>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What form of payment do I need to use?</AccordionTrigger>
                  <AccordionContent>
                    We accept cash, bank transfer, credit/debit cards, and cryptocurrency.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>In case of an accident, who do I contact?</AccordionTrigger>
                  <AccordionContent>
                    Contact our 24/7 helpline at <strong>+971 54 279 3533</strong>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Who do I contact if I want to extend the rental?</AccordionTrigger>
                  <AccordionContent>
                    Contact our sales head at <strong>+971 54 279 3532</strong>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What is the minimum age for renting a car?</AccordionTrigger>
                  <AccordionContent>
                    The minimum age to rent a car in Dubai is 18 years old.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  )
}

