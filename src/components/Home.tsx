"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import logo from "../public/assets/BEST.jpg"

// Integrated working CountdownTimer component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the target date to March 11th, 2025 at 2:30 PM
    const targetDate = new Date("2025-03-11T14:30:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(interval)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    // Initial calculation
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)
    setTimeLeft({ days, hours, minutes, seconds })

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0, rotateY: 90 },
    visible: {
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-4 gap-2 sm:gap-4"
    >
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-gradient-to-br from-yellow-900/50 to-red-900/50 p-3 sm:p-4 rounded-lg text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="text-2xl sm:text-4xl font-bold text-yellow-500"
            >
              {item.value < 10 ? `0${item.value}` : item.value}
            </motion.div>
          </AnimatePresence>
          <div className="text-xs sm:text-sm text-yellow-300">{item.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-red-950 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="absolute top-4 sm:top-8 left-4 sm:left-8 text-yellow-500 font-bold text-xl sm:text-2xl"
      >
        <motion.span
          className="inline-block"
          animate={{
            textShadow: [
              "0 0 5px rgba(251, 191, 36, 0.5)",
              "0 0 20px rgba(251, 191, 36, 0.8)",
              "0 0 5px rgba(251, 191, 36, 0.5)",
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          ANKURAM presents
        </motion.span>
      </motion.div>

      <div className="container mx-auto pt-16 sm:pt-20 px-4 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="logo-container mx-auto w-30 h-30"
        >
          <div className="logo-glow"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotateY: [0, 180, 360],
              boxShadow: [
                "0 0 10px rgba(251, 191, 36, 0.5)",
                "0 0 30px rgba(251, 191, 36, 0.8)",
                "0 0 10px rgba(251, 191, 36, 0.5)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="bg-gradient-to-r from-yellow-500 to-red-700 p-6 rounded-full w-full h-full flex items-center justify-center"
          >
            <img
              src={logo || "/placeholder.svg"}
              alt="Logo Holder"
              className="w-full h-full object-cover rounded-full" // Updated className
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-12"
        >
          <h1 className="exploria-title text-5xl sm:text-6xl md:text-7xl mb-4">AIKYAM</h1>
          <p className="text-yellow-500 subtitle text-lg sm:text-xl mb-2">by Team Elite Eagles</p>
          <p className="subtitle text-orange-500 text-xl sm:text-2xl">Unleashing Excellence, Inspiring Innovation</p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-3xl mx-auto mb-12 bg-black/40 rounded-xl p-6 border border-yellow-500/20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-bold text-yellow-500">Event Starts In</h2>
          </div>
          <CountdownTimer />
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-12">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px rgb(251, 191, 36)",
              boxShadow: "0 0 20px rgb(251, 191, 36)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/competitions")}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-red-600 to-orange-700 text-white rounded-lg text-xl font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Register
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px rgb(251, 191, 36)",
              boxShadow: "0 0 20px rgb(251, 191, 36)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/about")}
            className="px-8 py-4 bg-gradient-to-r from-orange-700 via-red-600 to-yellow-500 text-white rounded-lg text-xl font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
          >
            About Us
          </motion.button>
        </div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="max-w-4xl mx-auto mt-16 bg-black/40 rounded-xl p-6 border border-yellow-500/20"
        >
          <h2 className="text-2xl font-bold text-yellow-500 text-center mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-lg"
            >
              <Mail className="text-yellow-500 mb-2" size={28} />
              <h3 className="text-yellow-400 font-semibold mb-1">Email</h3>
              <a href="mailto:eliteeagles@example.com" className="text-white hover:text-yellow-300 transition-colors">
                mapruthvik@gmail.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-lg"
            >
              <Phone className="text-yellow-500 mb-2" size={28} />
              <h3 className="text-yellow-400 font-semibold mb-1">Phone</h3>
              <a href="tel:+919876543210" className="text-white hover:text-yellow-300 transition-colors">
                +91 8970653305
              </a>
            </motion.div>

            <a
              href="https://www.bing.com/search?q=vivekananda+college+address&qs=UT&pq=vivekananda+college+add&sc=12-23&cvid=CBA6E4E6A902436888565E7488EEB337&FORM=QBRE&sp=1&ghc=1&lq=0"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-lg"
              >
                <MapPin className="text-yellow-500 mb-2" size={28} />
                <h3 className="text-yellow-400 font-semibold mb-1">Address</h3>
                <p className="text-white text-center">
                  Nehru Nagar - Bannur - Haradi Road, Nehru Nagar, Puttur, Karnataka 574203
                </p>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
