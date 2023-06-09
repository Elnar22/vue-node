Vue.component("filter-el", {
  data() {
    return {
      userSearch: "",
    };
  },
  template: `                
            <form action="#" class="search_form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <button class="search__button" type="submit">
                    <i class="fa-solid fa-magnifying-glass header_search__icon header__link"></i>
                </button>
                <input type="text" class="search_field" v-model="userSearch">
            </form>
                `,
});
