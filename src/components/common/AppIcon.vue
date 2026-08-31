<script setup>
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Building2,
  User,
  Star,
  Layers,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Target,
  Lightbulb,
  Wrench,
  Code,
  Briefcase,
  Database,
  Compass,
} from 'lucide-vue-next'

const icons = {
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  building: Building2,
  user: User,
  star: Star,
  layers: Layers,
  calendar: Calendar,
  location: MapPin,
  download: Download,
  arrow_right: ArrowRight,
  target: Target,
  lightbulb: Lightbulb,
  wrench: Wrench,
  code: Code,
  briefcase: Briefcase,
  database: Database,
  compass: Compass,
}

defineProps({
  name: {
    type: String,
    required: true,
  },

  size: {
    type: [Number, String],
    default: 22,
  },
})
</script>

<template>
  <component
    v-if="icons[name]"
    :is="icons[name]"
    :size="size"
    :stroke-width="1.8"
    aria-hidden="true"
  />
</template>
