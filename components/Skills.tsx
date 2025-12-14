'use client'

import { motion } from 'framer-motion'
import { FiShield, FiServer, FiWifi, FiCpu, FiCode, FiTool } from 'react-icons/fi'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Network Security',
            icon: <FiShield />,
            skills: ['Firewall Configuration', 'IDS/IPS', 'VPN Implementation', 'SIEM Management', 'Threat Detection'],
            color: 'from-red-500/20 to-red-600/20'
        },
        {
            title: 'System Administration',
            icon: <FiServer />,
            skills: ['Windows Server', 'Linux (Ubuntu/CentOS)', 'Active Directory', 'Group Policy', 'Patch Management'],
            color: 'from-blue-500/20 to-blue-600/20'
        },
        {
            title: 'Networking',
            icon: <FiWifi />,
            skills: ['TCP/IP Protocols', 'Routing & Switching', 'Network Design', 'Wireless Networking', 'VoIP'],
            color: 'from-green-500/20 to-green-600/20'
        },
        {
            title: 'Hardware & Troubleshooting',
            icon: <FiCpu />,
            skills: ['Hardware Diagnostics', 'System Repair', 'Performance Tuning', 'Disaster Recovery', 'Backup Solutions'],
            color: 'from-purple-500/20 to-purple-600/20'
        },
        {
            title: 'Cybersecurity',
            icon: <FiCode />,
            skills: ['Vulnerability Assessment', 'Incident Response', 'Security Auditing', 'Compliance', 'Penetration Testing'],
            color: 'from-orange-500/20 to-orange-600/20'
        },
        {
            title: 'Tools & Technologies',
            icon: <FiTool />,
            skills: ['Wireshark', 'Nmap', 'Metasploit', 'Ansible', 'Docker', 'AWS'],
            color: 'from-gold-500/20 to-gold-600/20'
        }
    ]

    return (
        <section id="skills" className="section-container bg-primary-offwhite">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Expertise</h2>
                <p className="text-lg text-primary-gray max-w-3xl mx-auto">
                    Comprehensive skills spanning network infrastructure, system administration, and cybersecurity defense
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`bg-white rounded-xl p-6 shadow-lg border border-gold-100 hover:shadow-xl transition-shadow`}
                    >
                        <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} mr-4`}>
                                <div className="text-2xl text-gold-600">{category.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark">{category.title}</h3>
                        </div>

                        <ul className="space-y-2">
                            {category.skills.map((skill) => (
                                <li key={skill} className="flex items-center text-primary-gray">
                                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Certification Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16"
            >
                <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Certifications</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {['CompTIA Security+', 'CCNA', 'CEH', 'Linux+', 'AWS Certified'].map((cert, index) => (
                        <motion.div
                            key={cert}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-300 rounded-full flex items-center"
                        >
                            <span className="text-gold-700 font-semibold">{cert}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}