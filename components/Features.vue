<template>
  <section id="features" class="py-28 scroll-mt-2">
    <div class="container m-auto px-4">
      <!-- info for Features -->
      <div class="text-basic text-center">
        <h2 class="font-bold text-4xl lg:text-6xl">Key Features</h2>
        <p class="font-extralight text-sm mt-3 lg:text-lg lg:w-1/2 lg:mt-4 lg:m-auto"> Discover the power of our app's
          key features, designed to revolutionize your task management and boost your productivity. With a user-friendly
          interface and intuitive design</p>
      </div>
      <!-- list Features -->
      <div class="lg:mt-6">
        <ul class="lg:grid lg:grid-cols-2 lg:gap-6">
          <li v-for="item in realData" :key="item"
            class="border border-basic rounded-md px-5 py-[18px] max-h-full mt-6 lg:mt-0">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-basic font-medium flex items-center text-lg">
                <i :class="item.icon + ` ` + `text-lg w-[18px] h-[18px] mr-2 relative bottom-[2px]`"></i>
                {{ item.title }}
              </h3>
            </div>
            <div class="ml-[26px] mt-[2px]">
              <p class="text-basic font-extralight text-base">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const realData = ref([
  {
    title: "Streamlined Task Management",
    description: "Effortlessly manage tasks, projects, and deadlines with our streamlined task management feature. From creating tasks to setting priorities and deadlines.",
    icon: "fi fi-br-list-check",
    isOpen: false
  },
  {
    title: "Seamless Collaboration",
    description: "Foster effective collaboration with our seamless collaboration feature. Share tasks, communicate with team members in real-time always and free with Tasky.",
    icon: "fi fi-sr-users",
    isOpen: false
  },
  {
    title: "Customizable Workflows",
    description: "Tailor the app to match your unique preferences and workflows. Our customizable workflows feature allows you to adapt the app to your specific needs.",
    icon: "fi fi-sr-file-edit",
    isOpen: false
  },
  {
    title: "Automated Reminders",
    description: "Never miss a deadline again with our automated reminders. Stay on track and never overlook important tasks with timely reminders and notifications.",
    icon: "fi fi-sr-bells",
    isOpen: false
  }
])
</script>
