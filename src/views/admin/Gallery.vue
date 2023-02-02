<template>
<div class="gallerys">
    <div class="row">
        <h3>Upload Gallery Image</h3>
        <div class="col-md-12">
            <form method="POST" action="" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Event Name</label>
                    <v-text-field v-model="gname" label="name" required outlined></v-text-field>
                  
                </div>
                <div class="form-group">
                    <label>Upload Event Image</label>
                    <v-text-field type="file" ref="gimage" @change="uploadImage"  label="image" required outlined></v-text-field>
                   
                </div>
                <div class="my-3">

                    <v-btn color="green" type="submit" @click.prevent="addGallery" > Submit</v-btn>
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
                        <th scope="col">gallery Name</th>
                        <th scope="col">gallery Picture</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="gallery in gallerys" :key="gallery.id">
                        <th scope="row">{{ gallery.id }}</th>
                        <td>{{ gallery.gname }}</td>
                        <td>
                            <img :src="'/sub/storage/app/' + gallery.gimage" />
                        </td>
                        <td>
                            <button @click="editPartner(gallery.id)" class="btn btn-small btn-info">
                                Edit
                            </button>
                            <button @click="deletePartner(gallery.id)" class="btn btn-small btn-warning">
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
import Gallery from "@/api/Gallery";

export default {
    data() {
        return {
            gname: "",
            gimage: "",
            gallerys: [],
        };
    },

    created() {
        this.getGallery();
    },

    methods: {
        addGallery() {
            var data = new FormData();
            data.append("gname", this.gname);
            data.append("gimage", this.gimage);

            Gallery.addGallery(data, {
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

        getGallery() {
            Gallery.getGallery().then((response) => {
                this.gallerys = response.data;
                console.log(this.gallerys);
            });
        },

        uploadImage() {
            this.gimage = this.$refs.gimage.files[0];
        },

        deleteGallery(id) {
            if (window.confirm("Are you want to delete this?")) {
                Gallery.deleteGallery(id)
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
            }
        },
    },
};
</script>
  
  
<style scoped>
.gallerys {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
}

.gallerys .row {
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
