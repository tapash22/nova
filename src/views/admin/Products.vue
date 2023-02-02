<template>
<div class="product">
    <div class="row">
        <h3>Upload products with Details</h3>
        <div class="col-md-12">
            <form method="POST" action="" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Product Name</label>
            
                    <v-text-field v-model="pdname" label="name" required outlined></v-text-field>
                </div>
                <div class="form-group">
                    <label>Catagory</label>
                    <select class="form-control" v-model="pcname">
                        <option disabled value="">Select product Catagory...</option>
                        <option>poultry</option>
                        <option>dairy</option>
                        <option>aqua</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Sub-Catagory</label>
                    <select v-model="pscname" class="form-control">
                        <option disabled value="">Select product Sub-Catagory...</option>
                        <option>antibiotic</option>
                        <option>nutritional</option>
                        <option>harbal</option>
                        <option>probiotics</option>
                        <option>anticoccidial</option>
                        <option>penathaone</option>
                        <option>others</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Product Intro</label>
                    <v-text-field v-model="pintro" label="name" required outlined></v-text-field>
                </div>
                <div class="form-group">
                    <label>Dosage</label>
                    
                    <v-text-field v-model="pdescription" label="description" required outlined></v-text-field>
                </div>
                <div class="form-group">
                    <label>Composition</label>
                    <v-text-field type="file" ref="pcomimage" @change="uploadDimage()" label="image" required outlined></v-text-field>
                    <input class="form-control" type="file" ref="pcomimage" @change="uploadDimage()" />
                </div>
                <div class="form-group">
                    <label>Upload Image</label>
                    <input class="form-control" type="file" ref="pimage" @change="uploadImage()" />
                </div>
                <div class="my-3">
               
                    <v-btn color="green" type="submit" @click.prevent="addProduct" > Submit</v-btn>
                </div>
            </form>
        </div>
    </div>
    <div class="row my-3">
        <div class="col-md-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Catagory</th>
                        <th scope="col">Sub-Category</th>
                        <th scope="col">Product Intro</th>
                        <th scope="col">Product description</th>
                        <th scope="col">Product Using</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.pdname }}</td>
                        <td>{{ product.pcname }}</td>
                        <td>{{ product.pscname }}</td>
                        <td>{{ product.pintro }}</td>
                        <td>{{ product.pdescription }}</td>
                        <td>
                            <img :src="
                      '/sub/storage/app/' + product.pcomimage
                    " />
                        </td>
                        <td>
                            <img :src="
                      '/sub/storage/app/' + product.pimage
                    " />
                        </td>
                        <td>
                            <button @click="editProduct(product.id)" class="btn btn-small btn-info">
                                Edit
                            </button>
                            <button @click="deleteProduct(product.id)" class="btn btn-small btn-warning">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

  
  
<script>
import Product from "@/api/Products";

export default {
    data() {
        return {
            pdname: "",
            pcname: "",
            pscname: "",
            pintro: "",
            pdescription: "",
            pcomimage: "",
            pimage: "",

            products: [],
            id: "",
        };
    },

    created() {
        this.getProduct();
    },

    methods: {
        addProduct() {
            var data = new FormData();
            data.append("pdname", this.pdname);
            data.append("pcname", this.pcname);
            data.append("pscname", this.pscname);
            data.append("pintro", this.pintro);
            data.append("pdescription", this.pdescription);
            data.append("pcomimage", this.pcomimage);
            data.append("pimage", this.pimage);

            Product.addProduct(data, {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    if (res.data.error) {
                        console.log("errors", res.data.error);
                        alert(res.data.error);
                    } else {
                        console.log(res.data.message);
                        alert(res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        getProduct() {
            Product.getProduct().then((response) => {
                this.products = response.data;
                console.log(this.products);
            });
        },

        uploadDimage() {
            this.pcomimage = this.$refs.pcomimage.files[0];
        },

        uploadImage() {
            this.pimage = this.$refs.pimage.files[0];
        },

        deleteProduct(id) {
            if (window.confirm("Are you want to delete this?")) {
                Product.deleteProduct(id)
                    .then((res) => {
                        if (res.data.error) {
                            console.log("errors", res.data);
                            alert(res.data);
                        } else {
                            console.log(res.data.message);
                            alert(res.data);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
    },
};
</script>
  
  
<style scoped>
.product {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
}

.product .row {
    width: 100%;
    padding: 0;
    margin: 0;
}

.row h3 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    font-family: "Lobster", cursive;
}

.row .col-md-12 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

.col-md-12 form {
    padding: 10px;
    margin: 0;
    border: 2px solid gray;
    border-radius: 10px;
}

.col-md-12 form label {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 5px;
    margin: 0;
}

tbody tr td img {
    width: 150px;
    height: 80px;
    padding: 5px;
}
</style>
