<template>
  <div class="w-full h-full">
    <div class="w-full h-auto sticky top-[56px] z-50 bg-white p-4">
      <form class="flex flex-row items-center justify-between border-[1px] border-[#000000] px-4 py-3 gap-2 rounded-[10px]" @submit.prevent="onSearchChat">
        <img 
          src="~/assets/img/svg/search-black-24-outline.svg" 
          alt="Search icon" 
          class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]"
        />
        <input 
          type="search"
          placeholder="Cari percakapan..."
          class="w-full h-full outline-none text-[12px] leading-[15px] font-normal text-[rgba(0,0,0,0.5)]" 
        />
      </form>
    </div>
    <div class="w-full h-full flex flex-col items-start justify-start gap-4 px-4 mb-[82px]">
      <CardMessageItem 
        v-for="(message, index) in messages" 
        :key="index" 
        :username="message.username" 
        :timestamp="message.created_at" 
        :latest-message="message.message" 
      />
    </div>
    <div class="fixed left-0 bottom-0 right-0 min-w-[320px] max-w-[820px] mx-auto z-50 flex items-end justify-end p-4 pointer-events-none">
      <button type="button" class="w-full h-full min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-full bg-[#3C6255] flex items-center justify-center pointer-events-auto" @click="createNewChat">
        <img src="~/assets/img/svg/pencil-green-24-outline.svg" alt="Pencil icon" class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: true,
  components: {
    CardMessageItem: () => import('~/components/CardMessageItem')
  },
  layout: 'layout-1',
  data() {
    return {
      messages: [
        {
          _id: 1,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 2,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 3,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 4,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 5,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 6,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 7,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 8,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 9,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        },
        {
          _id: 10,
          username: 'Username',
          created_at: new Date().toISOString(),
          message: 'Latest message...'
        }
      ]
    }
  },
  methods: {
    onSearchChat() {
      console.log('on search chat')
    },
    createNewChat() {
      console.log('create new chat')
    }
  }
}
</script>
