"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Users, Briefcase, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const countries = [
    {
      name: "Malaysia",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Malaysia offers excellent opportunities for skilled workers in manufacturing, construction, hospitality, and services sectors.",
      featured: true,
      jobs: ["Electrician", "Factory Worker", "Chef", "Security Guard", "Cleaner"],
      benefits: [
        "Competitive salaries",
        "Work permits for up to 2 years",
        "Possibility of extension",
        "Family visa options",
      ],
    },
    {
      name: "UAE",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "The United Arab Emirates is seeking qualified workers in construction, hospitality, and service industries.",
      featured: false,
      jobs: ["Construction Worker", "Hotel Staff", "Driver", "Security Guard", "Cleaner"],
      benefits: [
        "Tax-free income",
        "Modern infrastructure",
        "Multicultural environment",
        "Career growth opportunities",
      ],
    },
    {
      name: "Qatar",
      image: "/placeholder.svg?height=300&width=400",
      description: "Qatar offers lucrative positions in construction, oil & gas, hospitality, and retail sectors.",
      featured: false,
      jobs: ["Construction Worker", "Oil & Gas Technician", "Waiter/Waitress", "Driver", "Cleaner"],
      benefits: ["High salaries", "Free accommodation (many jobs)", "Medical insurance", "Transportation allowances"],
    },
    {
      name: "Japan",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Japan has special technical trainee programs and opportunities in manufacturing, healthcare, and IT.",
      featured: false,
      jobs: ["Technical Trainee", "Factory Worker", "Caregiver", "Farm Worker", "Food Processing"],
      benefits: ["Skills development", "Japanese language training", "Cultural experience", "Career advancement"],
    },
    {
      name: "Romania",
      image: "/placeholder.svg?height=300&width=400",
      description: "Romania, an EU member state, offers opportunities in manufacturing, construction, and agriculture.",
      featured: false,
      jobs: ["Factory Worker", "Construction Worker", "Agricultural Worker", "Electrician", "Plumber"],
      benefits: ["EU work experience", "Pathway to EU residence", "Social security benefits", "Fair labor practices"],
    },
    {
      name: "Poland",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Poland has a growing economy with demand for workers in manufacturing, logistics, and construction.",
      featured: false,
      jobs: ["Factory Worker", "Warehouse Staff", "Construction Worker", "Welder", "Driver"],
      benefits: ["EU member benefits", "Simplified work permit procedures", "Social security", "Career development"],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Visa Services</h1>
            <p className="text-xl text-blue-100">
              We provide comprehensive visa and job placement services across multiple countries, helping you find the
              perfect international opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We handle the complex visa process so you don't have to, providing support at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-700" />,
                title: "Application",
                description: "Complete our simple application form and submit your documents.",
              },
              {
                icon: <Briefcase className="h-12 w-12 text-blue-700" />,
                title: "Job Matching",
                description: "We match your skills with the right employment opportunities.",
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-700" />,
                title: "Visa Processing",
                description: "We handle all paperwork and guide you through the visa process.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl font-bold mb-4">Destination Countries</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide visa services and job placement for the following countries:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden ${
                  country.featured ? "ring-2 ring-blue-500" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={country.image || "/placeholder.svg"}
                    alt={`${country.name} visa services`}
                    className="w-full h-48 object-cover"
                  />
                  {country.featured && (
                    <div className="absolute top-0 right-0 bg-blue-700 text-white py-1 px-3 text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                  <p className="text-gray-600 mb-4">{country.description}</p>

                  <h4 className="font-bold text-blue-700 mb-2">Available Jobs:</h4>
                  <ul className="mb-4">
                    {country.jobs.map((job, jobIndex) => (
                      <li key={jobIndex} className="flex items-center mb-1">
                        <Check className="h-4 w-4 text-green-600 mr-2" /> {job}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-bold text-blue-700 mb-2">Benefits:</h4>
                  <ul className="mb-6">
                    {country.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center mb-1">
                        <Check className="h-4 w-4 text-green-600 mr-2" /> {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link to="/job-apply" className="text-blue-700 font-medium hover:text-blue-800 flex items-center">
                    View job openings <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 md:p-12 shadow-lg text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your International Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Browse our current job openings and apply today. Our team will guide you through every step of the visa
              process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/job-apply" className="btn bg-green-600 text-white hover:bg-green-700">
                View Job Openings
              </Link>
              <Link to="/contact" className="btn bg-white text-blue-700 hover:bg-blue-50">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
