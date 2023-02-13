<template>
  <div class="w-full h-full p-4">
    <div class="w-full h-full flex flex-col items-start justify-start gap-4">
      <CardMessageItem 
        v-for="(message, index) in messages" 
        :key="index" 
        :username="message.username" 
        :timestamp="message.created_at" 
        :latest-message="message.message" 
      />
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
  }
}
</script>
