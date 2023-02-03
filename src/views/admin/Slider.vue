<template>
<div class="slider">
    <div class="row">
        <h3>Upload Sliders for Home page</h3>
        <div class="col-md-12">
            <form enctype="multipart/form-data">
                <div class="form-group">
                    <label>Slider Name</label>
                    <v-text-field v-model="sname" label="name" required outlined></v-text-field>
                  
                </div>
                <div class="form-group">
                    <label>Upload slider Image</label>
                    <input type="file" ref="simage" @change="uploadImage()" class="input" />
                  
                </div>
                <div class="my-3">
                  
                    <v-btn color="green"  @click.prevent="onSlider" > Submit</v-btn>
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
                        <th scope="col">Slider Name</th>
                        <th scope="col">Slider Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="slider in sliders" :key="slider.id">
                        <th scope="row">{{ slider.id }}</th>
                        <td>{{ slider.sname }}</td>
                        <td>
                            <img :src="
                      '/sub/storage/app/' + slider.simage
                    " />
                            <!-- <img src="https://novatechbdltd.com/subdomainfile/storage/app/upload/o9b2W7lAQEnnIMLauhF9G8Af7Z11vQXW3XbmlDUv.png"> -->
                        </td>
                        <td>
                            <button @click="editSlider(slider.id)" class="btn btn-small btn-info">
                                Edit
                            </button>
                            <button @click="deleteSlider(slider.id)" class="btn btn-small btn-warning">
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
import Slider from "@/api/Slider";

export default {
    data() {
        return {
            sname: "",
            simage: "",
            sliders: [],
            id: "",
        };
    },

    created() {
        this.getSlider();
    },

    methods: {
        onSlider() {
            var data = new FormData();
            data.append("sname", this.sname);
            data.append("simage", this.simage);

            Slider.addslider(data, {
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
        getSlider() {
            Slider.getSlider().then((response) => {
                this.sliders = response.data;
                console.log(this.sliders);
            });
        },

        uploadImage() {
            this.simage = this.$refs.simage.files[0];
        },

        deleteSlider(id) {
            if (window.confirm("Are you want to delete this?")) {

                Slider.deleteSlider(id)
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
        }

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
.slider {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
}

.slider .row {
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

tbody tr td {
    width: 30%;
}

tbody tr td img {
    width: 150px;
    height: 80px;
    padding: 5px;
}

tbody tr td .btn {
    padding: 5px;
    margin: 5px;
}
</style>
