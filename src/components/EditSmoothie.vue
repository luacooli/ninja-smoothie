<template>
  <div class="edit-smoothie container">
    <h2>Edit a smoothie {{ this.$route.params.smoothie_slug }}</h2>
  </div>
</template>

<script>
  import db from '@/firebase/init'
  import slugify from 'slugify'

  export default {
    name: 'EditSmoothie',
    data() {
      return {
        smoothie: null
      }
    },
    methods: {
      EditSmoothie() {
        if(this.smoothie.title) {
          this.feedback = null
          // create a slug
          this.smoothie.slug = slugify(this.smoothie.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!-:@]/g,
            lower: true
          })
          db.collection('smoothies').doc(smoothie.id).add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
          })
          .then(() => {
            this.$router.push({ name: 'Index' })
          })
        } else {
          this.feedback = 'You must enter a smoothie title'
        }
      }
    },
    created() {
      let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.smoothie = doc.data()
          this.smoothie.id = doc.id
        })
      })
    }
  }
</script>

<style>

</style>