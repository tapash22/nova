<template>
<div class="partner">
    <div class="row">
        <h3>Upload Partner with Details</h3>
        <div class="col-md-12">
            <form method="POST" action="" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Partner Name</label>
                    <v-text-field v-model="pname" label="name" required outlined></v-text-field>
                </div>
                <div class="form-group">
                    <label>Partner Link</label>
           
                    <v-text-field v-model="plink" label="link" required outlined></v-text-field>
                </div>
                <div class="form-group">
                    <label>Partner Image</label>
                    <input class="input"  type="file" ref="pimage" @change="uploadImage()"  label="image" required />
                   
                </div>
                <div class="my-3">
                   
                    <v-btn color="green" @click.prevent="createPartner" > Submit</v-btn>
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
                        <th scope="col">Partner Name</th>
                        <th scope="col">Partner Link</th>
                        <th scope="col">Partner Picture</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="partner in partners" :key="partner.id">
                        <th scope="row">{{ partner.id }}</th>
                        <td>{{ partner.pname }}</td>
                        <td>{{ partner.plink }}</td>
                        <td>
                            <img :src="'/sub/storage/app/' + partner.pimage" />
                        </td>
                        <td>
                            <button @click="editPartner(partner.id)" class="btn btn-small btn-info">
                                Edit
                            </button>
                            <button @click="deletePartner(partner.id)" class="btn btn-small btn-warning">
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
import Partner from "@/api/Partner";
export default {
    data() {
        return {
            pname: "",
            plink: "",
            pimage: "",
            partners: [],
            id: "",
        };
    },

    created() {
        this.getPartner();
    },

    methods: {
        createPartner() {
            var data = new FormData();
            data.append("pname", this.pname);
            data.append("plink", this.plink);
            data.append("pimage", this.pimage);

            Partner.addPartner(data, {
                    header: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    if (res.data.error) {
                        console.log("errors", res.data);
                        alert(res.data);
                    } else {
                        console.log(res.data);
                        alert(res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        getPartner() {
            Partner.getPartner().then((response) => {
                this.partners = response.data;
                console.log(this.partners);
            });
        },

        uploadImage() {
            this.pimage = this.$refs.pimage.files[0];
        },

        editPartner() {},

        deletePartner(id) {
            if (window.confirm("Are you want to delete this?")) {
                Partner.deletePartner(id)
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

.input{
    border:1px solid black;
    border-radius: 10px;
    padding: 15px;
    width: 100%;
}
.partner {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
}

.partner .row {
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

tbody td img {
    width: 150px;
    height: 100px;
}
</style>
