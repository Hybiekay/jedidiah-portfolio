'use client'

import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi'

export default function AboutSection() {
    const features = [
        {
            icon: <FiTarget />,
            title: 'Blue Team Focus',
            description: 'Specialized in defensive security with practical experience in threat detection and incident response'
        },
        {
            icon: <FiUsers />,
            title: 'Collaborative Approach',
            description: 'Work effectively with teams to deliver secure and efficient IT solutions'
        },
        {
            icon: <FiTrendingUp />,
            title: 'Continuous Learning',
            description: 'Committed to staying current with evolving cybersecurity threats and technologies'
        },
        {
            icon: <FiAward />,
            title: 'Problem Solver',
            description: 'Creative and innovative approach to solving complex technical challenges'
        }
    ]

    return (
        <section id="about" className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>

                    <div className="space-y-4 text-lg text-primary-gray">
                        <p>
                            I am a technology enthusiast with comprehensive expertise in computer networking, network security,
                            and IT systems administration with <span className="font-semibold text-gold-600">more than 5 years of professional experience</span>.
                        </p>

                        <p>
                            My proficiency spans both wired and wireless network infrastructures, allowing me to design, implement,
                            and maintain robust and efficient network environments. I am skilled in hardware and software troubleshooting,
                            ensuring optimal performance and reliability across diverse computing systems.
                        </p>

                        <p>
                            With extensive experience in both Windows and Linux operating systems, I can efficiently manage, configure,
                            and secure enterprise-level environments. My cybersecurity focus is oriented towards the blue team, with
                            practical experience in threat detection, incident response, and vulnerability management.
                        </p>

                        <p>
                            I bring a problem-solving mindset combined with creativity and innovation, enabling me to deliver effective
                            and secure IT solutions. Whether optimizing network performance, securing systems, or addressing technical
                            challenges, I approach every task with precision, professionalism, and a commitment to continuous learning
                            in the ever-evolving tech landscape.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column - Features & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Feature Cards */}
                    <div className="space-y-6 mb-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gold-100"
                            >
                                <div className="p-3 bg-gold-500/10 rounded-lg mr-4">
                                    <div className="text-2xl text-gold-600">{feature.icon}</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-primary-dark">{feature.title}</h3>
                                    <p className="text-primary-gray">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Experience Timeline */}
                    <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl border border-gold-200">
                        <h3 className="text-2xl font-bold mb-6 gradient-text">Professional Journey</h3>
                        <div className="space-y-4">
                            {[
                                { year: '2024', role: 'Senior Security Engineer', company: 'Tech Security Corp' },
                                { year: '2022', role: 'Network Administrator', company: 'Global Networks Inc' },
                                { year: '2020', role: 'IT Support Specialist', company: 'Data Systems Ltd' },
                                { year: '2018', role: 'Junior Network Analyst', company: 'Startup Tech Ventures' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-16 text-gold-600 font-bold">{item.year}</div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-primary-dark">{item.role}</div>
                                        <div className="text-primary-gray text-sm">{item.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}