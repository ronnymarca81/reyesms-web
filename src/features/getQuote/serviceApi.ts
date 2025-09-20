import type{ Steps } from './types'
export const defaultSteps: Steps[] = [
  {
    number: "01",
    title: "Book Your Package",
    description:
      "Contact us through email or call us directly to book our service.", 
      
    showArrow: true
  },
  {
    number: "02",
    title: "Set The Schedule",
    description:
      "Once you contact us, we call you back to confirm preferred time and date according to your schedule.",
    showArrow: true
  },
  {
    number: "03",
    title: "Cleaning Done!",
    description:
      "We will come to your place and provide our best quality service of cleaning.",
    showArrow: false
  }
];

 export const serviceOptions = [
   "House Cleaning",
   "Office Cleaning",
   "Deep Cleaning",
   "Move In/Out Cleaning",
   "Post Construction Cleaning",
   "Window Cleaning",
   "Carpet Cleaning"
 ];