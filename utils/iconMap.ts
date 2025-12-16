// utils/iconMap.ts
import * as React from 'react'
import {
    FiMail,
    FiLinkedin,
    FiFacebook,
    FiTwitter,
    FiSend,
    FiGithub,
    FiExternalLink,
    FiCalendar,
    FiTag,
    FiFilter,
    FiX,
    FiSearch,
    FiGrid,
    FiList,
    FiArrowRight,
    FiTarget,
    FiUsers,
    FiTrendingUp,
    FiAward,
    FiBriefcase,
    FiClock,
    FiEye,
    FiShield,
    FiServer,
    FiWifi,
    FiCpu,
    FiCode,
    FiTool,
    FiArrowUp,
    FiHome,
    FiUser,
    FiPhone,
    FiMapPin
} from 'react-icons/fi'
import { IconBaseProps } from 'react-icons'

// Define the icon component type
export type IconComponentType = React.ComponentType<IconBaseProps>

// Map of icon names to components
export const iconMap: Record<string, IconComponentType> = {
    FiMail,
    FiLinkedin,
    FiFacebook,
    FiTwitter,
    FiSend,
    FiGithub,
    FiExternalLink,
    FiCalendar,
    FiTag,
    FiFilter,
    FiX,
    FiSearch,
    FiGrid,
    FiList,
    FiArrowRight,
    FiTarget,
    FiUsers,
    FiTrendingUp,
    FiAward,
    FiBriefcase,
    FiClock,
    FiEye,
    FiShield,
    FiServer,
    FiWifi,
    FiCpu,
    FiCode,
    FiTool,
    FiArrowUp,
    FiHome,
    FiUser,
    FiPhone,
    FiMapPin
}

// Helper function to get icon component
export const getIconComponent = (iconName: string): IconComponentType => {
    return iconMap[iconName] || FiMail
}