<template>
  <section id="faq" class="py-28 scroll-mt-2">
    <div class="container m-auto px-4 max-w-4xl">
      <!-- info for Features -->
      <div class="text-basic text-center">
        <h2 class="font-bold text-4xl lg:text-6xl">You ask? we answer</h2>
      </div>
      <!-- list Features -->
      <div class="mt-16">
          <ul>
            <li v-for="item in realData.FaqList" :key="item.title" @click="OpenBox(item)"
              class="border-2 border-basic rounded-md px-4 py-4 lg:py-4 max-h-full mt-6 lg:mb-4 cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-basic font-medium flex items-start lg:text-lg select-none">
                  <i class="fi fi-br-life-ring text-lg w-[18px] h-[18px] mr-2 mt-1 relative bottom-[2px]"></i>
                  {{ item.title }}
                </h3>
                <i :class="item.isOpen ? 'fi fi-rr-minus-small' : 'fi fi-rr-plus-small'"
                  class="text-4xl w-9 h-9 list-item text-basic"></i>
              </div>
              <div class="overflow-hidden transition-all duration-300 ml-[26px]" :class="{ 'max-h-[500px]': item.isOpen, 'max-h-0': !item.isOpen }">
                <p class="text-basic font-extralight text-base mt-1">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        <div>
          <p class="font-extralight text-sm text-center mt-7 lg:text-xl lg:mt-9 text-basic">OR</p>
          <div class="text-center lg:flex lg:items-center lg:justify-center">
            <p class="font-extralight text-sm text-center mt-7 lg:text-lg lg:mr-3 text-basic">Can not find what you are looking for?
            </p>
            <a class="inline-block mt-7 text-basic text-lg border border-basic py-3 px-6 rounded-md hover:bg-basic hover:text-white transition-all"
              href=mailto:#>Email us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const realData = ref({
  FaqList: [
    {
      title: "How can I get started with the app?",
      description: "Getting started is easy! Simply download the app from the App Store or Google Play Store, create an account, and follow the on-screen instructions to set up your profile. You'll be up and running in no time.",
      isOpen: false
    },
    {
      title: "Can I use the app on multiple devices?",
      description: "Yes, you can use the Tasky app on multiple devices. The app is designed to be compatible with multiple devices and supports seamless synchronization across all devices. Access your tasks and updates on all of your connected devices.",
      isOpen: false
    },
    {
      title: "Is my data secure in the app?",
      description: "Yes, your data is secure in the Tasky app. Tasky employs encryption, secure authentication, and data storage measures to protect your information. Regular updates and a clear privacy policy further enhance data security.",
      isOpen: false
    },
    {
      title: "Can I collaborate with others using the app?",
      description: "Yes, you can collaborate with others using the Tasky app. It allows you to share tasks, receive real-time updates, leave comments, assign tasks to team members, and track task completion.",
      isOpen: false
    },
    {
      title: "Can I customize the app to fit my workflow?",
      description: "Yes, you can customize Tasky to fit your workflow. Tasky is designed to be flexible and adaptable, allowing users to tailor the app to their individual preferences and needs.",
      isOpen: false
    },
    {
      title: "Is there a way to track my productivity and progress?",
      description: "Tasky provides several ways to track your productivity and progress. You can mark tasks as complete, set due dates and reminders, review task history, access task analytics, and generate progress reports.",
      isOpen: false
    }
  ]
});

function OpenBox(item) {
  item.isOpen = !item.isOpen;
}
</script>