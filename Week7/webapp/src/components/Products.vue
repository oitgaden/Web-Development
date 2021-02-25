<template>
    <div>
        <div v-if='operation == "list"'>
            <h2 class='section-heading'>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.productId">
                        <td>{{ product.name }}</td>
                        <td>${{ product.price }}</td>
                        <td>
                            <button v-on:click='displayProductDetails(product.productId)'>Details</button>
                            <button v-on:click='displayUpdateProduct(product.productId)'>Update</button>
                            <button v-on:click='deleteProduct(product.productId)'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button id='addBtn' v-on:click='displayAddProduct()'>Add Product</button>
        </div>

        <div v-if='operation == "add"'>
            <h2 class='section-heading'>Add Product</h2>
        
            <form>
                <div class='form-entry'>
                    Name: <input type='text' v-model='name'/>
                </div>

                <div class='form-entry'>
                    Price: <input type='text' v-model='price'/>
                </div>

                <div class='form-entry'>
                    Count: <input type='text' v-model='count'/>
                </div>

                <div class='form-entry'>
                    <button v-on:click='addProduct'>Add Product</button>
                    <button v-on:click='cancel'>Cancel</button>
                </div>
            </form>

        </div>

        <div v-if='operation == "detail"'>
            <h2 class='section-heading'>Product Detail</h2>

            <div class='form-entry'>
                Name: {{ name }}
            </div>

            <div class='form-entry'>
                Price: {{ price }}
            </div>

            <div class='form-entry'>
                Count: {{ count }}
            </div>

            <div class='form-entry'>
                <button v-on:click='cancel'>Ok</button>
            </div>
        </div>

        <div v-if='operation == "update"'>
            <h2 class='section-heading'>Update Product</h2>
        
            <form>
                <div class='form-entry'>
                    Name: <input type='text' v-model='name'/>
                </div>

                <div class='form-entry'>
                    Price: <input type='text' v-model='price'/>
                </div>

                <div class='form-entry'>
                    Count: <input type='text' v-model='count'/>
                </div>

                <div class='form-entry'>
                    <button v-on:click='updateProduct'>Update Product</button>
                    <button v-on:click='cancel'>Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Products',
        
        data () {
            return {
                products: [],
                operation: 'list',
                name: undefined,
                price: undefined,
                count: undefined,
                productUpdateId: undefined,
                apiServer: process.env.VUE_APP_API_SERVER
            }
        },

        methods: {
            getProducts: function() {
                let url = `http://${this.apiServer}/api/product`;

                Vue.axios.get(url).then(
                    (response) => {
                        this.products = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            },

            getProduct: function(productId) {
                let url = `http://${this.apiServer}/api/product/${productId}`;

                Vue.axios.get(url).then(
                    (response) => {
                        this.name = response.data.name;
                        this.price = response.data.price;
                        this.count = response.data.count;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            },

            displayAddProduct: function() {
                this.name = undefined;
                this.price = undefined;
                this.count = undefined;

                this.operation = 'add';
            },

            addProduct: function() {
                let url = `http://${this.apiServer}/api/product`;

                Vue.axios.post(url, {
                    name: this.name,
                    price: parseFloat(this.price),
                    count: parseInt(this.count)
                }).then(
                    () => {
                        this.getProducts();
                        this.operation = 'list';
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            },

            displayProductDetails: function(productId) {
                this.getProduct(productId);

                this.operation = 'detail';
            },

            displayUpdateProduct: function(productId) {
                this.productUpdateId = productId;
                this.getProduct(productId);

                this.operation = 'update';
            },

            updateProduct: function() {
                let url = `http://${this.apiServer}/api/product/${this.productUpdateId}`;

                Vue.axios.put(url, {
                    name: this.name,
                    price: parseFloat(this.price),
                    count: parseInt(this.count)
                }).then(
                    () => {
                        this.getProducts();
                        this.operation = 'list';
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            },

            deleteProduct: function(productId) {
                let url = `http://${this.apiServer}/api/product/${productId}`;

                Vue.axios.delete(url).then(
                    () => {
                        this.getProducts();
                        this.operation = 'list';
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            },

            cancel: function() {
                this.operation = 'list';
            }
        },

        mounted() {
            this.getProducts();
            this.operation = 'list';
        }
    }
</script>

<style scoped>

    table {
        border-collapse: collapse;
    }

    table, th, td {
        border: 1px solid black;
        padding: 10px;
    }

    #addBtn {
        margin-top: 20px;
    }

    .form-entry {
        margin-top: 20px;
    }

</style>