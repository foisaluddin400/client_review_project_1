import React from 'react'
import HeroSection from '../../component/HeroSection'
import ProductFeatures from '../../component/ProductFeatures'
import Benefits from '../../component/Benefits'
import PricingSection from '../../component/PricingSection'
import CallToAction from '../../component/CallToAction'

export const HomePage = () => {
  return (
    <div><HeroSection></HeroSection>
    <ProductFeatures></ProductFeatures>
    <Benefits></Benefits>
    <PricingSection></PricingSection>
    <CallToAction></CallToAction>
    </div>
  )
}
