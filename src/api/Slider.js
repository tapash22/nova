import Api from "./Api";

export default{

    getSlider(){
        return Api().get('/slider')
    },

    addslider(slider){
        return Api().post("/slider/add",slider);
    },

    deleteSlider(id){
        return Api().delete(`/slider/delete/${id}`);
    }
    
}