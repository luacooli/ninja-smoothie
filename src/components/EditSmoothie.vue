<template>
  <div class="edit-smoothie container">
    <h2>Edit a smoothie {{ this.$route.params.smoothie_slug }}</h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="smoothie.title"/>
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="field">
        <label for="ingredient">Ingredients:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]"/>
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another" />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    // editSmoothie() {
    //   if (this.smoothie.title) {
    //     this.feedback = null;
    //     // create a slug
    //     this.smoothie.slug = slugify(this.smoothie.title, {
    //       replacement: "-",
    //       remove: /[$*_+~.()'"!-:@]/g,
    //       lower: true
    //     });
    //     db.collection("smoothies")
    //       .doc(smoothie.id)
    //       .add({
    //         title: this.title,
    //         ingredients: this.ingredients,
    //         slug: this.slug
    //       })
    //       .then(() => {
    //         this.$router.push({ name: "Index" });
    //       });
    //   } else {
    //     this.feedback = "You must enter a smoothie title";
    //   }
    // }
  },
  created() {
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data();
        this.smoothie.id = doc.id;
      });
    });
  }
};
</script>

<style>
</style>