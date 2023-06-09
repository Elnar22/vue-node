Vue.component("products", {
  data() {
    return {
      products: [],
      filtered: [],
    };
  },
  methods: {
    filter(value) {
      let regexp = new RegExp(value, "i");
      this.filtered = this.products.filter((el) =>
        regexp.test(el.product_title)
      );
    },
  },
  mounted() {
    this.$parent.getJson(`/api/products`).then((data) => {
      for (let el of data) {
        this.products.push(el);
        this.filtered.push(el);
      }
    });
  },
  template: `
    <div class="container products_card__box">
        <product v-for="item of filtered" :key="item.product_id" :product="item"></product>       
    </div>
    `,
});

Vue.component("product", {
  props: ["product"],
  template: `
              <div class="card">
                    <div class="cart__hover">
                        <div>
                            <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">
                                <p><i class="fa-solid fa-cart-shopping"></i>Add to Cart</p>
                            </button>
                        </div>
                        <img :src="product.product_img" alt="product">
                    </div>
                    <div class="card__bottom">
                        <h4 class="card__name">{{product.product_title}}</h4>
                        <p class="card__text">{{product.product_desc}}</p>
                        <p class="card__price">{{product.product_price}}$</p>
                    </div>
              </div>
  `,
});
